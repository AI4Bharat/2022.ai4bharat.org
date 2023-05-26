---
blocks:
  - tagline: ''
    headline: IndicTrans2
    text: ''
    _template: hero
  - body: >
      [Preprint is available here](https://arxiv.org/abs/2305.16307)\



      IndicTrans2 is the first open-source transformer-based multilingual NMT
      model that supports high-quality translations across all the 22 scheduled
      Indic languages — including multiple scripts for low-resouce languages
      like Kashmiri, Manipuri and Sindhi. It adopts script unification wherever
      feasible to leverage transfer learning by lexical sharing between
      languages. Overall, the model supports five scripts Perso-Arabic
      (Kashmiri, Sindhi, Urdu), Ol Chiki (Santali), Meitei (Manipuri), Latin
      (English), and Devanagari (used for all the remaining languages).


      We open-souce all our training dataset (BPCC), back-translation data
      (BPCC-BT), final IndicTrans2 models, evaluation benchmarks (IN22, which
      includes IN22-Gen and IN22-Conv) and training and inference scripts for
      easier use and adoption within the research community. We hope that this
      will foster even more research in low-resource Indic languages, leading to
      further improvements in the quality of low-resource translation through
      contributions from the research community.


      This code repository contains instructions for downloading the artifacts
      associated with IndicTrans2, as well as the code for training/fine-tuning
      the multilingual NMT models.


      Here is the list of languages supported by the IndicTrans2 models:
    _template: content
  - markupTable: |-
      <table>
      <tbody>
        <tr>
          <td>Assamese (asm_Beng)</td>
          <td>Kashmiri (Arabic) (kas_Arab)</td>
          <td>Punjabi (pan_Guru)</td>
        </tr>
        <tr>
          <td>Bengali (ben_Beng)</td>
          <td>Kashmiri (Devanagari) (kas_Deva)</td>
          <td>Sanskrit (san_Deva)</td>
        </tr>
        <tr>
          <td>Bodo (brx_Deva)</td>
          <td>Maithili (mai_Deva)</td>
          <td>Santali (sat_Olck)</td>
        </tr>
        <tr>
          <td>Dogri (doi_Deva)</td>
          <td>Malayalam (mal_Mlym)</td>
          <td>Sindhi (Arabic) (snd_Arab)</td>
        </tr>
        <tr>
          <td>English (eng_Latn)</td>
          <td>Marathi (mar_Deva)</td>
          <td>Sindhi (Devanagari) (snd_Deva)</td>
        </tr>
        <tr>
          <td>Konkani (gom_Deva)</td>
          <td>Manipuri (Bengali) (mni_Beng)</td>
          <td>Tamil (tam_Taml)</td>
        </tr>
        <tr>
          <td>Gujarati (guj_Gujr)</td>
          <td>Manipuri (Meitei) (mni_Mtei)</td>
          <td>Telugu (tel_Telu)</td>
        </tr>
        <tr>
          <td>Hindi (hin_Deva)</td>
          <td>Nepali (npi_Deva)</td>
          <td>Urdu (urd_Arab)</td>
        </tr>
        <tr>
          <td>Kannada (kan_Knda)</td>
          <td>Odia (ory_Orya)</td>
          <td></td>
        </tr>
      </tbody>
      </table>
    color: default
    _template: table
---

