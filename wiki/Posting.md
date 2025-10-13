## Daily Tweeting

Update the `Known For` Property

> WHERE SUBSTRING(c.life.born, 5, 5) = "05-20"

```bash
cd apps/cli
pnpm run build
# create READY posts in data/posts.json
node .\dist\apps\cli\main.js botd 2026-04-23 --listOnly
# clean up any shown as invalid
# paste the printed posts to social media
```

```mermaid

graph TD
build>build cli]
botd>node .\dist\apps\cli\main.js botd 2026-05-20 --listOnly]
start-->build
build-->botd
botd-->paste
paste-->done

```

## title: 10-1 Network

### description: Section 10 - System Environment - Figure 10-1 Network

```mermaid
graph LR
subgraph External Services
github["GitHub"]
slack["Slack"]
statuspage["StatusPage"]
codeclimate["Code Climate"]
googlegroups["Google Groups"]
circle["Circle CI"]
end
subgraph AWS US West Oregon
kinesis["AWS Kinesis"]
end
subgraph AWS US East/West
cloudfront["AWS CloudFront"]
route53["AWS Route 53"]
end
subgraph AWS GovCloud
apps-elb["Customer ELB"]
ops-elb["UAA & Concourse ELB"]
s3["AWS S3"]
cloudwatch["AWS CloudWatch"]
cloudwatch-logs["AWS CloudWatch Logs"]
config["AWS Config"]
cloudtrail["AWS CloudTrail"]
iam["AWS IAM"]
iam-perms["AWS IAM Permissions"]
iam-roles["AWS IAM Roles"]
aws-console["AWS Console"]
subgraph Staging VPC
vpc-staging{Copy of Production VPC}
end
subgraph Development VPC
vpc-development{Copy of Production VPC}
end
subgraph cloud.gov Authorization Boundary
subgraph Production VPC
subgraph Availability Zones us-gov-west-1a/b
subgraph Public Subnet
prod-nat["NAT Gateway"]
prod-elb-endpoint("ELB Endpoint")
end
subgraph Private Subnet - Core Tier A
prod-cf{"Cloud Foundry<br>Core Components"}
idp["cloud.gov fallback IDP"]
end
subgraph Private Subnet - Core Tier B
prod-diego{"Cloud Foundry<br>Container Management"}
end
subgraph Private Subnet - Database Tier
prod-rds{"AWS RDS instances"}
end
subgraph Private Subnet - Services Tier
prod-services{"Service instances"}
end
end
vpc-router-prod["VPC Router"]
end
vpc-peering["VPC Peering Connection"]
subgraph Tooling VPC
subgraph Tooling Availability Zones us-gov-west-1a/b
subgraph Public Subnet
tooling-nat["NAT Gateway"]
tooling-elb-endpoint("ELB Endpoint")
end
subgraph Private Subnet - Operations Tier
tooling-ops["BOSH Director/UAA"]
end
subgraph Private Subnet - Database Tier
tooling-rds{"AWS RDS instances"}
end
subgraph Private Subnet - Concourse Tier
tooling-concourse["Concourse - production"]
end
end
vpc-router-tooling["VPC Router"]
end
end
end
customer(("Customer"))
ops(("Cloud Operations"))

customer-.DNS.->route53
customer--Web-->cloudfront
customer--Web or CLI-->apps-elb
customer-->statuspage

cloudfront-->apps-elb
prod-services-.create service instance.->cloudfront
prod-services-.create service instance.->s3

ops-->ops-elb
ops-->github
ops-->slack
ops---aws-console
ops-->statuspage
ops-->googlegroups

codeclimate-- Static analysis --- github
circle-- Continuous Testing --- github
tooling-nat--Alerting-->googlegroups

vpc-router-tooling-->vpc-peering
vpc-router-prod-->vpc-peering
vpc-staging-->vpc-peering
vpc-development-->vpc-peering
aws-console-."Authentication/Authorization".->iam
iam-.->iam-perms
iam-perms-.->iam-roles

apps-elb---prod-elb-endpoint
prod-elb-endpoint---prod-nat
prod-nat---prod-cf
prod-nat---prod-diego
prod-nat---prod-rds
prod-nat---prod-services

ops-elb---tooling-elb-endpoint
tooling-elb-endpoint---tooling-nat
tooling-nat---tooling-ops
tooling-nat---tooling-rds
tooling-nat---tooling-concourse

cloudwatch-logs-- Encrypted log data only --- kinesis
```
