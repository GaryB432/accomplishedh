import type { CommonsPage, CommonsPages, CommonsResponse } from "../types.js";

const image_response: CommonsResponse = {
  continue: {
    continue: "||",
    iistart: "2008-06-06T22:27:45Z",
  },
  query: {
    pages: {
      "925243": {
        imageinfo: [
          {
            descriptionshorturl:
              "https://commons.wikimedia.org/w/index.php?curid=925243",
            descriptionurl:
              "https://commons.wikimedia.org/wiki/File:Albert_Einstein_Head.jpg",
            extmetadata: {
              Artist: {
                source: "commons-desc-page",
                value:
                  'Photograph by \u003Ca href="//commons.wikimedia.org/w/index.php?title=Orren_Jack_Turner&amp;action=edit&amp;redlink=1" class="new" title="Orren Jack Turner (page does not exist)"\u003EOrren Jack Turner\u003C/a\u003E, Princeton, N.J. \u003Cbr\u003EModified with Photoshop by \u003Ca href="https://en.wikipedia.org/wiki/User:PM_Poon" class="extiw" title="en:User:PM Poon"\u003EPM_Poon\u003C/a\u003E and later by \u003Ca href="//commons.wikimedia.org/wiki/User:Dantadd" title="User:Dantadd"\u003EDantadd\u003C/a\u003E.',
              },
              Assessments: {
                hidden: "",
                source: "commons-categories",
                value: "valued",
              },
              AttributionRequired: {
                hidden: "",
                source: "commons-desc-page",
                value: "false",
              },
              Categories: {
                hidden: "",
                source: "commons-categories",
                value:
                  "Images from the Library of Congress|PD US not renewed|Images with extracted images|Featured pictures on Wikipedia, Persian|Albert Einstein by Oren Jack Turner (1947)|Featured pictures on Wikipedia, Arabic",
              },
              CommonsMetadataExtension: {
                hidden: "",
                source: "extension",
                value: 1.2,
              },
              Copyrighted: {
                hidden: "",
                source: "commons-desc-page",
                value: "False",
              },
              Credit: {
                source: "commons-desc-page",
                value:
                  'This image  is available from the United States \u003Ca href="//commons.wikimedia.org/wiki/Library_of_Congress" title="Library of Congress"\u003ELibrary of Congress\u003C/a\u003E\'s \u003Ca rel="nofollow" class="external text" href="//www.loc.gov/rr/print/"\u003EPrints and Photographs division\u003C/a\u003E\u003Cbr\u003E under the digital ID \u003Ca rel="nofollow" class="external text" href="https://hdl.loc.gov/loc.pnp/cph.3b46036"\u003Ecph.3b46036\u003C/a\u003E.\u003Cbr\u003E\u003Csmall\u003EThis tag does not indicate the copyright status of the attached work. \u003Cspan style="white-space:nowrap"\u003EA normal \u003Ca href="//commons.wikimedia.org/wiki/Special:MyLanguage/Commons:Copyright_tags" title="Special:MyLanguage/Commons:Copyright tags"\u003Ecopyright tag\u003C/a\u003E is still required.\u003C/span\u003E \u003Cspan style="white-space:nowrap"\u003ESee \u003Ca href="//commons.wikimedia.org/wiki/Special:MyLanguage/Commons:Licensing" title="Special:MyLanguage/Commons:Licensing"\u003ECommons:Licensing\u003C/a\u003E.\u003C/span\u003E\u003C/small\u003E',
              },
              DateTime: {
                hidden: "",
                source: "mediawiki-metadata",
                value: "2014-11-25 19:59:28",
              },
              DateTimeOriginal: {
                source: "commons-desc-page",
                value:
                  'Copyrighted 1947, copyright not renewed. Einstein\'s estate may still claim copyright on this image, but any such claim would be considered illegitimate by the Library of Congress. No known restrictions.\u003Ca rel="nofollow" class="external autonumber" href="https://www.loc.gov/pictures/item/2004671908/"\u003E[1]\u003C/a\u003E',
              },
              ImageDescription: {
                source: "commons-desc-page",
                value:
                  '\u003Ca href="https://en.wikipedia.org/wiki/Albert_Einstein" class="extiw" title="en:Albert Einstein"\u003EAlbert Einstein\u003C/a\u003E',
              },
              License: {
                hidden: "",
                source: "commons-templates",
                value: "pd",
              },
              LicenseShortName: {
                hidden: "",
                source: "commons-desc-page",
                value: "Public domain",
              },
              ObjectName: {
                source: "mediawiki-metadata",
                value: "Albert Einstein Head",
              },
              Restrictions: {
                hidden: "",
                source: "commons-desc-page",
                value: "",
              },
              UsageTerms: {
                source: "commons-desc-page",
                value: "Public domain",
              },
            },
            height: 4333,
            metadata: [
              {
                name: "MEDIAWIKI_EXIF_VERSION",
                value: 1,
              },
            ],
            mime: "image/jpeg",
            responsiveUrls: {
              "1.5":
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/500px-Albert_Einstein_Head.jpg",
              "2": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/960px-Albert_Einstein_Head.jpg",
            },
            size: 2309396,
            thumbheight: 440,
            thumburl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/330px-Albert_Einstein_Head.jpg",
            thumbwidth: 330,
            url: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
            width: 3250,
          },
        ],
        imagerepository: "local",
        ns: 6,
        pageid: 925243,
        title: "File:Albert Einstein Head.jpg",
      },
    },
  },
};

const sample_page_925243: CommonsPage = {
  imageinfo: [
    {
      descriptionshorturl:
        "https://commons.wikimedia.org/w/index.php?curid=925243",
      descriptionurl:
        "https://commons.wikimedia.org/wiki/File:Albert_Einstein_Head.jpg",
      extmetadata: {
        Artist: {
          source: "commons-desc-page",
          value:
            'Photograph by <a href="//commons.wikimedia.org/w/index.php?title=Orren_Jack_Turner&amp;action=edit&amp;redlink=1" class="new" title="Orren Jack Turner (page does not exist)">Orren Jack Turner</a>, Princeton, N.J. <br>Modified with Photoshop by <a href="https://en.wikipedia.org/wiki/User:PM_Poon" class="extiw" title="en:User:PM Poon">PM_Poon</a> and later by <a href="//commons.wikimedia.org/wiki/User:Dantadd" title="User:Dantadd">Dantadd</a>.',
        },
        Assessments: {
          hidden: "",
          source: "commons-categories",
          value: "valued",
        },
        AttributionRequired: {
          hidden: "",
          source: "commons-desc-page",
          value: "false",
        },
        Categories: {
          hidden: "",
          source: "commons-categories",
          value:
            "Images from the Library of Congress|PD US not renewed|Images with extracted images|Featured pictures on Wikipedia, Persian|Albert Einstein by Oren Jack Turner (1947)|Featured pictures on Wikipedia, Arabic",
        },
        CommonsMetadataExtension: {
          hidden: "",
          source: "extension",
          value: 1.2,
        },
        Copyrighted: {
          hidden: "",
          source: "commons-desc-page",
          value: "False",
        },
        Credit: {
          source: "commons-desc-page",
          value:
            'This image  is available from the United States <a href="//commons.wikimedia.org/wiki/Library_of_Congress" title="Library of Congress">Library of Congress</a>\'s <a rel="nofollow" class="external text" href="//www.loc.gov/rr/print/">Prints and Photographs division</a><br> under the digital ID <a rel="nofollow" class="external text" href="https://hdl.loc.gov/loc.pnp/cph.3b46036">cph.3b46036</a>.<br><small>This tag does not indicate the copyright status of the attached work. <span style="white-space:nowrap">A normal <a href="//commons.wikimedia.org/wiki/Special:MyLanguage/Commons:Copyright_tags" title="Special:MyLanguage/Commons:Copyright tags">copyright tag</a> is still required.</span> <span style="white-space:nowrap">See <a href="//commons.wikimedia.org/wiki/Special:MyLanguage/Commons:Licensing" title="Special:MyLanguage/Commons:Licensing">Commons:Licensing</a>.</span></small>',
        },
        DateTime: {
          hidden: "",
          source: "mediawiki-metadata",
          value: "2014-11-25 19:59:28",
        },
        DateTimeOriginal: {
          source: "commons-desc-page",
          value:
            'Copyrighted 1947, copyright not renewed. Einstein\'s estate may still claim copyright on this image, but any such claim would be considered illegitimate by the Library of Congress. No known restrictions.<a rel="nofollow" class="external autonumber" href="https://www.loc.gov/pictures/item/2004671908/">[1]</a>',
        },
        ImageDescription: {
          source: "commons-desc-page",
          value:
            '<a href="https://en.wikipedia.org/wiki/Albert_Einstein" class="extiw" title="en:Albert Einstein">Albert Einstein</a>',
        },
        License: { hidden: "", source: "commons-templates", value: "pd" },
        LicenseShortName: {
          hidden: "",
          source: "commons-desc-page",
          value: "Public domain",
        },
        ObjectName: {
          source: "mediawiki-metadata",
          value: "Albert Einstein Head",
        },
        Restrictions: {
          hidden: "",
          source: "commons-desc-page",
          value: "",
        },
        UsageTerms: {
          source: "commons-desc-page",
          value: "Public domain",
        },
      },
      height: 4333,
      metadata: [{ name: "MEDIAWIKI_EXIF_VERSION", value: 1 }],
      mime: "image/jpeg",
      responsiveUrls: {
        "1.5":
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/500px-Albert_Einstein_Head.jpg",
        "2": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/960px-Albert_Einstein_Head.jpg",
      },
      size: 2309396,
      thumbheight: 440,
      thumburl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/330px-Albert_Einstein_Head.jpg",
      thumbwidth: 330,
      url: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
      width: 3250,
    },
  ],
  imagerepository: "local",
  ns: 6,
  pageid: 925243,
  title: "File:Albert Einstein Head.jpg",
};
const query: { pages: CommonsPages } = {
  pages: {
    "357715": {
      imageinfo: [
        {
          descriptionshorturl:
            "https://commons.wikimedia.org/w/index.php?curid=357715",
          descriptionurl:
            "https://commons.wikimedia.org/wiki/File:Vladimir_Korolenko_bw.jpg",
          extmetadata: {
            Assessments: {
              hidden: "",
              source: "commons-categories",
              value: "",
            },
            AttributionRequired: {
              hidden: "",
              source: "commons-desc-page",
              value: "false",
            },
            Categories: {
              hidden: "",
              source: "commons-categories",
              value:
                "Vladimir Korolenko|Files with no machine-readable author|Files with no machine-readable source|Media missing infobox template|PD Old|CC-PD-Mark",
            },
            CommonsMetadataExtension: {
              hidden: "",
              source: "extension",
              value: 1.2,
            },
            Copyrighted: {
              hidden: "",
              source: "commons-desc-page",
              value: "False",
            },
            DateTime: {
              hidden: "",
              source: "mediawiki-metadata",
              value: "2019-10-29 03:45:20",
            },
            License: { hidden: "", source: "commons-templates", value: "pd" },
            LicenseShortName: {
              hidden: "",
              source: "commons-desc-page",
              value: "Public domain",
            },
            ObjectName: {
              source: "mediawiki-metadata",
              value: "Vladimir Korolenko bw",
            },
            Restrictions: {
              hidden: "",
              source: "commons-desc-page",
              value: "",
            },
            UsageTerms: {
              source: "commons-desc-page",
              value: "Public domain",
            },
          },
          height: 579,
          metadata: [{ name: "MEDIAWIKI_EXIF_VERSION", value: 1 }],
          mime: "image/jpeg",
          responsiveUrls: {
            "1.5":
              "https://upload.wikimedia.org/wikipedia/commons/9/9d/Vladimir_Korolenko_bw.jpg",
            "2": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Vladimir_Korolenko_bw.jpg",
          },
          size: 66193,
          thumbheight: 495,
          thumburl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Vladimir_Korolenko_bw.jpg/330px-Vladimir_Korolenko_bw.jpg",
          thumbwidth: 330,
          url: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Vladimir_Korolenko_bw.jpg",
          width: 386,
        },
      ],
      imagerepository: "local",
      ns: 6,
      pageid: 357715,
      title: "File:Vladimir Korolenko bw.jpg",
    },
    "925243": sample_page_925243,
  },
};
