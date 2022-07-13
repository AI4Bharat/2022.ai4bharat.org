---
blocks:
  - body: "# ***IndicXlit***\n\n[Website](https://indicnlp.ai4bharat.org/indic-xlit)\_|\_[Downloads](https://github.com/AI4Bharat/IndicXlit#download-indicxlit-model)\_|\_[Paper](https://arxiv.org/abs/2205.03018)\_|\_[Demo](https://xlit.ai4bharat.org/)\_|\_[Python Library](https://pypi.org/project/ai4bharat-transliteration)\n\n[***IndicXlit***](https://indicnlp.ai4bharat.org/indic-xlit)\_is a transformer-based multilingual transliteration model (~11M) for roman to native script conversion that\_***supports 21 Indic languages***. It is trained on\_[***Aksharantar***](https://indicnlp.ai4bharat.org/aksharantar/)\_dataset which is the\_***largest publicly available parallel corpus containing 26 million word pairs spanning 20 Indic languages***\_at the time of writing (5 May 2022). It supports following 21 Indic languages:\n"
    _template: content
  - markdownTable: "<!-- list of languages IndicXlit supports -->\n| <!-- -->  \t | <!-- --> \t  | <!-- --> \t   | <!-- -->\t     | <!-- -->       | <!-- -->      |\n| -------------- | -------------- | -------------- | --------------- | -------------- | ------------- |\n| Assamese (asm) | Bengali (ben)  |  Bodo (brx)    | Gujarati (guj)  | Hindi (hin)    | Kannada (kan) |\n| Kashmiri (kas) | Konkani (gom)  | Maithili (mai) | Malayalam (mal) | Manipuri (mni) | Marathi (mar) | \n| Nepali (nep)   | Oriya (ori)    | Punjabi (pan)  |  Sanskrit (san) | Sindhi (snd)   | Sinhala (sin) |\n|  Tamil (tam)   |  Telugu (tel)  |   Urdu (urd)   | "
    color: default
    _template: table
  - body: "### Evaluation Results\n\nIndicXlit is evaluated on\_[Dakshina benchmark](https://github.com/google-research-datasets/dakshina)\_and\_[Aksharantar benchmark](https://indicnlp.ai4bharat.org/aksharantar/). IndicXlit achieves state-of-theart results on the Dakshina testset and also provide baseline results on the new Aksharantar testset. The Top-1 results are summarized below. For more details, refer\_our [paper](https://arxiv.org/abs/2205.03018)\n"
    _template: content
  - markdownTable: >
      | Languages | asm | ben | brx | guj | hin | kan | kas | kok | mai | mal |
      mni | mar | nep | ori | pan | san | tam | tel | urd |

      | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
      --- | --- | --- | --- | --- | --- | --- | --- |

      | Dakshina | - | 55.49 | - | 62.02 | 60.56 | 77.18 | - | - | - | 63.56 | -
      | 64.85 | - | - | 47.24 | - | 68.10 | 73.38 | 42.12 | 61.45 |

      | Aksharantar (native words) | 60.27 | 61.70 | 70.79 | 61.89 | 55.59 |
      76.18 | 28.76 | 63.06 | 72.06 | 64.73 | 83.19 | 63.72 | 80.25 | 58.90 |
      40.27 | 78.63 | 69.78 | 84.69 | 48.37 |

      | Aksharantar (named entities) | 38.62 | 37.12 | 30.32 | 48.89 | 58.87 |
      49.92 | 20.23 | 34.36 | 42.82 | 33.93 | 44.12 | 53.57 | 52.67 | 30.63 |
      36.08 | 24.06 | 42.12 | 51.82 | 47.77 |
    color: default
    _template: table
---

