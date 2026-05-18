# Exemplary Bioinformatics Graph Systems

## 1. Cytoscape Desktop

- **What:** The gold standard for biological network analysis and visualization.
- **Who uses it:** Biologists, geneticists, systems biologists, pharma researchers, academic labs.
- **Open source:** Yes ([cytoscape.org](https://cytoscape.org/)), Java-based, extensible via plugins.
- **Layouts:**
  - **Force-directed (Spring-embedded):** For general protein/gene interaction networks; visually separates clusters.
  - **Hierarchical (DAG, tree):** For pathway diagrams, signaling cascades, and ontologies.
  - **Circular:** For ring-like or cycle-rich networks.
  - **Grid:** For small, regular networks or plugin UIs.
  - **Custom plugin layouts:** Many plugins add domain-specific layouts (e.g., cluster, radial, compound).
- **Why:**
  - Force-directed is default for its organic, cluster-revealing look.
  - Hierarchical is used for pathway/ontology clarity.
  - Users can switch layouts interactively.

## 2. Gephi

- **What:** General-purpose network analysis tool, popular in biology and social science.
- **Who uses it:** Biologists, social scientists, data journalists, network theorists.
- **Open source:** Yes ([gephi.org](https://gephi.org/)), Java-based.
- **Layouts:**
  - **ForceAtlas2 (force-directed):** Default, scalable to large graphs.
  - **Yifan Hu, Fruchterman-Reingold:** Other force-directed options.
  - **Circular, radial, hierarchical:** For specific use cases.
- **Why:**
  - Force-directed for cluster/relationship discovery.
  - Hierarchical for tree/DAG data.

## 3. NDEx (Network Data Exchange)

- **What:** Online platform for sharing, analyzing, and visualizing biological networks.
- **Who uses it:** Bioinformaticians, collaborative research teams, data publishers.
- **Open source:** Yes ([ndexbio.org](https://ndexbio.org/)), web-based, Cytoscape integration.
- **Layouts:**
  - **Force-directed (via Cytoscape.js):** For interactive web visualization.
  - **Hierarchical:** For pathway/ontology data.
- **Why:**
  - Web-first, so layouts are chosen for clarity and performance in browser.

## 4. Pathway Commons / Reactome

- **What:** Pathway databases with interactive network viewers.
- **Who uses it:** Biologists, pathway analysts, educators.
- **Open source:** Yes (Reactome: [reactome.org](https://reactome.org/)), web-based, Cytoscape.js under the hood.
- **Layouts:**
  - **Hierarchical/tree:** For pathway steps.
  - **Force-directed:** For interaction/association networks.
- **Why:**
  - Hierarchical for stepwise processes.
  - Force-directed for exploratory analysis.

---

## Summary Table

| System    | Open Source | Typical Users         | Main Layouts Used            |
| --------- | ----------- | --------------------- | ---------------------------- |
| Cytoscape | Yes         | Biologists, pharma    | Force-directed, hierarchical |
| Gephi     | Yes         | Biologists, social    | Force-directed, circular     |
| NDEx      | Yes         | Bioinformaticians     | Force-directed, hierarchical |
| Reactome  | Yes         | Biologists, educators | Hierarchical, force-directed |

## Why These Layouts?

- **Force-directed:** Reveals clusters, hubs, and relationships naturally; good for exploratory work.
- **Hierarchical:** Clarifies directionality, steps, or ontologies; essential for pathways and DAGs.
- **Circular/radial:** Used for cycles, rings, or to emphasize centrality.
- **Grid:** Rare in bio, but used for plugin UIs or very small graphs.

## References

- [Cytoscape](https://cytoscape.org/)
- [Gephi](https://gephi.org/)
- [NDEx](https://ndexbio.org/)
- [Reactome](https://reactome.org/)
- [Pathway Commons](https://www.pathwaycommons.org/)

---

> These tools are open source, widely used in research, and set the standard for graph layouts in bioinformatics. Most let users switch layouts interactively, but force-directed and hierarchical are the most common defaults.
