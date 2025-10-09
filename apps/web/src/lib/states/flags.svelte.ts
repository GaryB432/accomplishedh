class FlagsInstance {
  private _wb = $state<boolean>(false);

  public get wikibaseFeatures(): boolean {
    return this._wb;
  }
  public set wikibaseFeatures(v: boolean) {
    this._wb = v;
  }
}

export const flags = new FlagsInstance();
