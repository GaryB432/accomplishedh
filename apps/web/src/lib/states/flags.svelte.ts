class FlagsInstance {
  public get wikibaseFeatures(): boolean {
    return this._wb;
  }

  public set wikibaseFeatures(v: boolean) {
    this._wb = v;
  }
  private _wb = $state<boolean>(false);
}

export const flags = new FlagsInstance();
