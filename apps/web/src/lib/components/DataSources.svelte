<section>
  <div class="osf">
    <a
      href="https://osf.io/z9cnk/"
      rel="external nofollow noopener noreferrer"
      target="_blank"
      aria-label="Open Science Foundation logo"
    >
      <img src="/osf.png" alt="Open Science Foundation logo" />
      <div class="words">Open Science Foundation</div>
    </a>
  </div>
  <div class="wb">
    <a
      href="https://www.wikidata.org/wiki/Wikidata:Main_Page"
      rel="external nofollow noopener noreferrer"
      target="_blank"
      aria-label="Wikidata.org logo"
    >
      <img src="/SVG/Wikidata_Stamp_Rec_Light.svg" alt="" />
    </a>
  </div>
</section>

<style>
  section {
    display: flex;
    padding: 1em 2em;
    box-shadow: var(--shadow-15);
    align-items: center;
    border-radius: 5px;
    justify-content: center;
    gap: 2.5em;
  }

  .wb,
  .osf {
    max-width: 100px;
  }

  .wb a,
  .osf a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    align-items: center;
  }

  .wb a {
    & img {
      width: 150px;
    }
  }

  .osf a {
    font-variant: small-caps;
    & .words {
      font-size: 0.7em;
      line-height: 1em;
      text-align: center;
    }
    & img {
      width: 50px;
    }
  }

  .osf a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    font-variant: small-caps;
    & img {
      width: 100%;
    }
    & .words {
      font-size: 0.7em;
      line-height: 1em;
      text-align: center;
    }
  }
</style>
