import {Injectable, Signal, signal, WritableSignal} from '@angular/core';

export class Locale {
  name: string;
  code: string;
  langCode: string;
  regionCode: string;

  constructor(name: string, code: string) {
    this.name = name;
    this.code = code;

    this.langCode = this.code.substring(0, 2).toLowerCase();
    this.regionCode = this.code.substring(3, 5).toLowerCase();
  }
}

@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  readonly supportedLocales: Map<string, Locale>;
  readonly defaultLocale: Locale;

  private _selectedLocale: WritableSignal<Locale>;
  readonly selectedLocale: Signal<Locale>;


  constructor() {
    this.defaultLocale = new Locale('English', 'en-US');
    this.supportedLocales = new Map([
      ['en', this.defaultLocale],
      ['fr', new Locale('Français', 'fr-FR')],
      ['es', new Locale('Español', 'es-ES')],
      ['de', new Locale('Deutsch', 'de-DE')],
      ['pt', new Locale('Português', 'pt-PT')],
      ['it', new Locale('Italiano', 'it-IT')],
      ['tr', new Locale('Türkçe', 'tr-TR')],
      ['pl', new Locale('Polski', 'pl-PL')],
      ['ru', new Locale('Русский', 'ru-RU')],
      ['uk', new Locale('Українська', 'uk-UA')],
      ['ko', new Locale('한국어', 'ko-KR')],
      ['zh', new Locale('汉语', 'zh-CN')],
      ['ja', new Locale('日本語', 'ja-JP')]
    ]);

    let selectedLocale;

    let localeString = localStorage.getItem('locale');
    if (localeString != null) {
      let locale: Locale = JSON.parse(localeString);
      selectedLocale = new Locale(locale.name, locale.code);
    } else {
      let userLang = this.getUsersLocale('en-US').substring(0, 2);
      selectedLocale = this.supportedLocales.get(userLang);
    }

    this._selectedLocale = signal(selectedLocale !== undefined ? selectedLocale : this.defaultLocale);
    this.selectedLocale = this._selectedLocale.asReadonly();
  }

  getUsersLocale(defaultValue: string): string {
    if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
      return defaultValue;
    }
    const wn = window.navigator as any;
    let lang = wn.languages ? wn.languages[0] : defaultValue;
    lang = lang || wn.language || wn.browserLanguage || wn.userLanguage;
    return lang;
  }

  changeLocale(localeCode: string) {
    const newLocale = this.supportedLocales.get(localeCode.substring(0, 2));
    if (newLocale !== undefined) {
      this._selectedLocale.set(newLocale);
    }
  }
}
