import { Injectable } from '@angular/core';
import { HttpClient,withFetch } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class DataService {
  private dataSubject = new BehaviorSubject<any>(null);
  public data$: Observable<any> = this.dataSubject.asObservable();
  
  private v3 = 'https://vendor-list.consensu.org/v3/vendor-list.json'; // Path to your JSON file
  private p3_ar = 'https://vendor-list.consensu.org/v3/purposes-ar.json';
  private p3_bg = 'https://vendor-list.consensu.org/v3/purposes-bg.json';
  private p3_bs = 'https://vendor-list.consensu.org/v3/purposes-bs.json';
  private p3_ca = 'https://vendor-list.consensu.org/v3/purposes-ca.json';
  private p3_cs = 'https://vendor-list.consensu.org/v3/purposes-cs.json';
  private p3_cy = 'https://vendor-list.consensu.org/v3/purposes-cy.json';
  private p3_da = 'https://vendor-list.consensu.org/v3/purposes-da.json';
  private p3_de = 'https://vendor-list.consensu.org/v3/purposes-de.json';
  private p3_el = 'https://vendor-list.consensu.org/v3/purposes-el.json';
  private p3_en = 'https://vendor-list.consensu.org/v3/purposes-en.json';
  private p3_es = 'https://vendor-list.consensu.org/v3/purposes-es.json';
  private p3_et = 'https://vendor-list.consensu.org/v3/purposes-et.json';
  private p3_eu = 'https://vendor-list.consensu.org/v3/purposes-eu.json';
  private p3_fi = 'https://vendor-list.consensu.org/v3/purposes-fi.json';
  private p3_fr = 'https://vendor-list.consensu.org/v3/purposes-fr.json';
  private p3_gl = 'https://vendor-list.consensu.org/v3/purposes-gl.json';
  private p3_he = 'https://vendor-list.consensu.org/v3/purposes-he.json';
  private p3_hr = 'https://vendor-list.consensu.org/v3/purposes-hr.json';
  private p3_hu = 'https://vendor-list.consensu.org/v3/purposes-hu.json';
  private p3_id = 'https://vendor-list.consensu.org/v3/purposes-id.json';
  private p3_it = 'https://vendor-list.consensu.org/v3/purposes-it.json';
  private p3_ja = 'https://vendor-list.consensu.org/purposes-ja.json';
  private p3_ko = 'https://vendor-list.consensu.org/purposes-ko.json';
  private p3_lt= 'https://vendor-list.consensu.org/v3/purposes-lt.json';
  private p3_lv= 'https://vendor-list.consensu.org/v3/purposes-lv.json';
  private p3_mk= 'https://vendor-list.consensu.org/v3/purposes-mk.json';
  private p3_ms= 'https://vendor-list.consensu.org/v3/purposes-ms.json';
  private p3_mt= 'https://vendor-list.consensu.org/v3/purposes-mt.json';
  private p3_nl= 'https://vendor-list.consensu.org/v3/purposes-nl.json';
  private p3_no= 'https://vendor-list.consensu.org/v3/purposes-no.json';
  private p3_pl= 'https://vendor-list.consensu.org/v3/purposes-pl.json';
  private p3_ptbr = 'https://vendor-list.consensu.org/v3/purposes-pt-br.json';
  private p3_ptpt = 'https://vendor-list.consensu.org/v3/purposes-pt-pt.json';
  private p3_ro = 'https://vendor-list.consensu.org/v3/purposes-ro.json';
  private p3_ru = 'https://vendor-list.consensu.org/v3/purposes-ru.json';
  private p3_sk= 'https://vendor-list.consensu.org/v3/purposes-sk.json';
  private p3_sl= 'https://vendor-list.consensu.org/v3/purposes-sl.json';
  private p3_sr_cyrl = 'https://vendor-list.consensu.org/v3/purposes-sr-cyrl.json';
  private p3_sr_latn = 'https://vendor-list.consensu.org/v3/purposes-sr-latn.json';
  private p3_sv = 'https://vendor-list.consensu.org/v3/purposes-sv.json';
  private p3_tl = 'https://vendor-list.consensu.org/v3/purposes-tl.json';
  private p3_tr = 'https://vendor-list.consensu.org/v3/purposes-tr.json';
  private p3_uk = 'https://vendor-list.consensu.org/v3/purposes-uk.json';
  private p3_zh = 'https://vendor-list.consensu.org/v3/purposes-zh.json';

  constructor(private http: HttpClient) { }

  getV3Json(): Observable<any> {
    return this.http.get(this.v3, { responseType: 'json' });
  }

  getPurposeLang(language: string): Observable<any> {
    let url = this.getUrlForLanguage(language);
    if (url) { console.log(url);
      return this.http.get(url, { responseType: 'json' });


    } else {
      throw new Error('Unsupported language or missing URL');
    }
  }

  private getUrlForLanguage(language: string): string | null {
    switch (language.toLowerCase()) {
      case 'english':return this.p3_en; case 'arabic': return this.p3_ar;
      case 'bulgarian': return this.p3_bg; 
      case 'bosnian': return this.p3_bs; 
      case 'catalan': return this.p3_ca; 
      case 'czech': return this.p3_cs; 
      case 'welsh': return this.p3_cy; 
      case 'danish': return this.p3_da; 
      case 'german': return this.p3_de; 
      case 'greek': return this.p3_el; 
      case 'spanish': return this.p3_es; 
      case 'estonian': return this.p3_et; 
      case 'basque': return this.p3_eu; 
      case 'finnish': return this.p3_fi; 
      case 'french': return this.p3_fr; 
      case 'galician': return this.p3_gl; 
      case 'hebrew': return this.p3_he; 
      case 'croatian': return this.p3_hr; 
      case 'hungarian': return this.p3_hu; 
      case 'indonesian': return this.p3_id; 
      case 'italian': return this.p3_it; 
      case 'japanese': return this.p3_ja; 
      case 'korean': return this.p3_ko; 
      case 'lithuanian': return this.p3_lt; 
      case 'latvian': return this.p3_lv; 
      case 'macedonian': return this.p3_mk; 
      case 'malay': return this.p3_ms; 
      case 'maltese': return this.p3_mt; 
      case 'dutch': return this.p3_nl;
      case 'norwegian': return this.p3_no; 
      case 'polish': return this.p3_pl; 
      case 'portugues(brazil)': return this.p3_ptbr;
      case 'portuguese(portugal)': return this.p3_ptpt;
      case 'romanian': return this.p3_ro; 
      case 'russian': return this.p3_ru; 
      case 'slovak': return this.p3_sk; 
      case 'slovenian': return this.p3_sl; 
      case 'serbian(cyrillic)': return this.p3_sr_cyrl; 
      case 'serbian(latin)': return this.p3_sr_latn; 
      case 'swedish': return this.p3_sv; 
      case 'tagalog': return this.p3_tl; 
      case 'turkish': return this.p3_tr; 
      case 'ukrainian': return this.p3_uk; 
      case 'chinese': return this.p3_zh;
      

      default:
        return null; // Return null if the language is not supported
    }
  }

}
