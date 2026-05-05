Today I learned about STL

## Stereolithography tabs of iterest

[STL (file format) - Wikipedia](<https://en.wikipedia.org/wiki/STL_(file_format)>)

[Creating diagrams - GitHub Docs](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#creating-stl-3d-models)

[STL (STereoLithography) File Format Family](https://www.loc.gov/preservation/digital/formats/fdd/fdd000504.shtml)

[What Is an STL File? – The STL Format Simply Explained | All3DP](https://all3dp.com/1/stl-file-format-3d-printing/)

[STLA Files - ASCII stereolithography files](https://people.sc.fsu.edu/~jburkardt/data/stla/stla.html)

```stl
solid MYSOLID
  facet normal  0.0   0.0  -1.0
    outer loop
      vertex    0.0   0.0   0.0
      vertex    1.0   1.0   0.0
      vertex    1.0   0.0   0.0
    endloop
  endfacet
  facet normal  0.0   0.0  -1.0
    outer loop
      vertex    0.0   0.0   0.0
      vertex    0.0   1.0   0.0
      vertex    1.0   1.0   0.0
    endloop
  endfacet
  facet normal -1.0   0.0   0.0
    outer loop
      vertex    0.0   0.0   0.0
      vertex    0.0   1.0   1.0
      vertex    0.0   1.0   0.0
    endloop
  endfacet
  facet normal -1.0   0.0   0.0
    outer loop
      vertex    0.0   0.0   0.0
      vertex    0.0   0.0   1.0
      vertex    0.0   1.0   1.0
    endloop
  endfacet
  facet normal  0.0   1.0   0.0
    outer loop
      vertex    0.0   1.0   0.0
      vertex    1.0   1.0   1.0
      vertex    1.0   1.0   0.0
    endloop
  endfacet
  facet normal  0.0   1.0   0.0
    outer loop
      vertex    0.0   1.0   0.0
      vertex    0.0   1.0   1.0
      vertex    1.0   1.0   1.0
    endloop
  endfacet
  facet normal  1.0   0.0   0.0
    outer loop
      vertex    1.0   0.0   0.0
      vertex    1.0   1.0   0.0
      vertex    1.0   1.0   1.0
    endloop
  endfacet
  facet normal  1.0   0.0   0.0
    outer loop
      vertex    1.0   0.0   0.0
      vertex    1.0   1.0   1.0
      vertex    1.0   0.0   1.0
    endloop
  endfacet
  facet normal  0.0  -1.0   0.0
    outer loop
      vertex    0.0   0.0   0.0
      vertex    1.0   0.0   0.0
      vertex    1.0   0.0   1.0
    endloop
  endfacet
  facet normal  0.0  -1.0   0.0
    outer loop
      vertex    0.0   0.0   0.0
      vertex    1.0   0.0   1.0
      vertex    0.0   0.0   1.0
    endloop
  endfacet
  facet normal  0.0   0.0   1.0
    outer loop
      vertex    0.0   0.0   1.0
      vertex    1.0   0.0   1.0
      vertex    1.0   1.0   1.0
    endloop
  endfacet
  facet normal  0.0   0.0   1.0
    outer loop
      vertex    0.0   0.0   1.0
      vertex    1.0   1.0   1.0
      vertex    0.0   1.0   1.0
    endloop
  endfacet
endsolid MYSOLID

```
