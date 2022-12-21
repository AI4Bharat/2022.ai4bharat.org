---
blocks:
  - quote: Naamapadam
    author: Phil Karlton
    color: primary
    _template: testimonial
  - body: "Naamapadam is the largest publicly available Named Entity Recognition (NER) dataset for the 11 major Indian languages: Assamese, Bengali, Gujarati, Hindi, Kannada, Malayalam, Marathi, Oriya, Punjabi, Tamil, Telugu. \_In each language, it contains more than 400k sentences annotated with a total of at least 100k entities from three standard entity categories (Person, Location and Organization) for 9 out of the 11 languages.\_\n\nThe dataset contains train, test and dev splits. We have manually annotated gold standard testsets for 8 languages:   Bengali, Gujarati, Hindi, Kannada, Malayalam, Marathi, Punjabi, Telugu.  &#x20;\n\nWe also release IndicNER, a multilingual mBERT model fine-tuned on the Naamapadam training set.\n\n### Downloads\n\nNaamapadam Dataset: Available on our [Hugginface repository](https://huggingface.co/datasets/ai4bharat/naamapadam)\n\nIndicNER model: Available on our [Huggingface repository](https://huggingface.co/ai4bharat/IndicNER)\n"
    _template: content
  - caption: >-
      Comparison of Indian language Named Entity training dataset statistics
      (total number of named entities), For all datasets, the statistics include
      only LOC, PER and ORG named entities.
    markdownTable: >-
      |                              |   as  |  bn  |   gu   |   hi   |  kn  | 
      ml  |   mr   |   or   |   pa   |   ta   |   te   |

      |:----------------------------:|:-----:|:----:|:------:|:------:|:----:|:----:|:------:|:------:|:------:|:------:|:------:|

      | Naamapadam             |  5.0K | 1.6M | 765.5K |  2.1M  | 655K | 1.0M |
      731.2K | 189.6K | 875.9K | 741.1K | 747.8K |

      | WikiANN             |  443  |  61K |  1.6K  |  4.7K  | 1.9K | 9.4K | 
      7.2K  |   658  |   1K   |  12.5K |  3.4K  |

      | FIRE-2014           |   -   | 6.1K |    -   |  3.5K  |   -  | 4.2K |   
      -   |    -   |    -   |  3.2K  |    -   |

      | CFILT               |   -   |   -  |    -   | 262.1K |   -  |   -  | 
      4.8K  |    -   |    -   |    -   |    -   |

      | MultiCoNER          |   -   | 9.9K |    -   |  10.5K |   -  |   -  |   
      -   |    -   |    -   |    -   |    -   |

      | MahaNER             |   -   |   -  |    -   |    -   |   -  |   -  |  
      16K  |    -   |    -   |    -   |    -   |

      | AsNER               | ~6K |   -  |    -   |    -   |   -  |   -  |   
      -   |    -   |    -   |    -   |    -   |
    color: default
    _template: table
  - caption: >-
      Statistics for the Naamapadam dataset. The testsets for  as, or and ta are
      either silver standard or small. Work on creation of larger, manually
      annotated testsets is in progress for these languages.
    markupTable: >-
      <style type="text/css">

      .tg  {border-collapse:collapse;border-spacing:0;}

      .tg
      td{border-color:black;border-style:solid;border-width:1px;font-family:Arial,
      sans-serif;font-size:14px;
        overflow:hidden;padding:10px 5px;word-break:normal;}
      .tg
      th{border-color:black;border-style:solid;border-width:1px;font-family:Arial,
      sans-serif;font-size:14px;
        font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
      .tg .tg-c3ow{border-color:inherit;text-align:center;vertical-align:top}

      .tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}

      .tg .tg-dvpl{border-color:inherit;text-align:right;vertical-align:top}

      </style>

      <table class="tg">

      <thead>
        <tr>
          <th class="tg-0pky">Lang.</th>
          <th class="tg-c3ow" colspan="3">Sentence Count</th>
          <th class="tg-c3ow" colspan="3">Train</th>
          <th class="tg-c3ow" colspan="3">Dev</th>
          <th class="tg-c3ow" colspan="3">Test</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td class="tg-0pky"></td>
          <td class="tg-c3ow">Train</td>
          <td class="tg-c3ow">Dev</td>
          <td class="tg-c3ow">Test</td>
          <td class="tg-c3ow">Org</td>
          <td class="tg-c3ow">Loc</td>
          <td class="tg-c3ow">Per</td>
          <td class="tg-c3ow">Org</td>
          <td class="tg-c3ow">Loc</td>
          <td class="tg-c3ow">Per</td>
          <td class="tg-c3ow">Org</td>
          <td class="tg-c3ow">Loc</td>
          <td class="tg-c3ow">Per</td>
        </tr>
        <tr>
          <td class="tg-0pky">bn</td>
          <td class="tg-0pky">961.7K</td>
          <td class="tg-dvpl">4.9K</td>
          <td class="tg-dvpl">607</td>
          <td class="tg-dvpl">340.7K</td>
          <td class="tg-dvpl">560.9K</td>
          <td class="tg-dvpl">725.2K</td>
          <td class="tg-dvpl">1.7K</td>
          <td class="tg-dvpl">2.8K</td>
          <td class="tg-dvpl">3.7K</td>
          <td class="tg-dvpl">207</td>
          <td class="tg-dvpl">331</td>
          <td class="tg-dvpl">457</td>
        </tr>
        <tr>
          <td class="tg-0pky">gu</td>
          <td class="tg-0pky">472.8K</td>
          <td class="tg-dvpl">2.4K</td>
          <td class="tg-dvpl">1.1K</td>
          <td class="tg-dvpl">205.7K</td>
          <td class="tg-dvpl">238.1K</td>
          <td class="tg-dvpl">321.7K</td>
          <td class="tg-dvpl">1.1K</td>
          <td class="tg-dvpl">1.2K</td>
          <td class="tg-dvpl">1.6K</td>
          <td class="tg-dvpl">419</td>
          <td class="tg-dvpl">645</td>
          <td class="tg-dvpl">673</td>
        </tr>
        <tr>
          <td class="tg-0pky">hi</td>
          <td class="tg-0pky">985.8K</td>
          <td class="tg-dvpl">13.5K</td>
          <td class="tg-dvpl">437</td>
          <td class="tg-dvpl">686.4K</td>
          <td class="tg-dvpl">731.2K</td>
          <td class="tg-dvpl">767.0K</td>
          <td class="tg-dvpl">9.7K</td>
          <td class="tg-dvpl">10.2K</td>
          <td class="tg-dvpl">10.5K</td>
          <td class="tg-dvpl">257</td>
          <td class="tg-dvpl">302</td>
          <td class="tg-dvpl">263</td>
        </tr>
        <tr>
          <td class="tg-0pky">kn</td>
          <td class="tg-0pky">471.8K</td>
          <td class="tg-dvpl">2.4K</td>
          <td class="tg-dvpl">1.0K</td>
          <td class="tg-dvpl">167.5K</td>
          <td class="tg-dvpl">177.0K</td>
          <td class="tg-dvpl">310.5K</td>
          <td class="tg-dvpl">882</td>
          <td class="tg-dvpl">919</td>
          <td class="tg-dvpl">1.6K</td>
          <td class="tg-dvpl">291</td>
          <td class="tg-dvpl">397</td>
          <td class="tg-dvpl">614</td>
        </tr>
        <tr>
          <td class="tg-0pky">ml</td>
          <td class="tg-0pky">716.7K</td>
          <td class="tg-dvpl">3.6K</td>
          <td class="tg-dvpl">974</td>
          <td class="tg-dvpl">234.5K</td>
          <td class="tg-dvpl">308.2K</td>
          <td class="tg-dvpl">501.2K</td>
          <td class="tg-dvpl">1.2K</td>
          <td class="tg-dvpl">1.6K</td>
          <td class="tg-dvpl">2.6K</td>
          <td class="tg-dvpl">309</td>
          <td class="tg-dvpl">482</td>
          <td class="tg-dvpl">714</td>
        </tr>
        <tr>
          <td class="tg-0pky">mr</td>
          <td class="tg-0pky">455.2K</td>
          <td class="tg-dvpl">2.3K</td>
          <td class="tg-dvpl">1.1K</td>
          <td class="tg-dvpl">164.9K</td>
          <td class="tg-dvpl">224.0K</td>
          <td class="tg-dvpl">342.3K</td>
          <td class="tg-dvpl">868</td>
          <td class="tg-dvpl">1.2K</td>
          <td class="tg-dvpl">1.8K</td>
          <td class="tg-dvpl">391</td>
          <td class="tg-dvpl">569</td>
          <td class="tg-dvpl">696</td>
        </tr>
        <tr>
          <td class="tg-0pky">pa</td>
          <td class="tg-0pky">463.5K</td>
          <td class="tg-dvpl">2.3K</td>
          <td class="tg-dvpl">993</td>
          <td class="tg-dvpl">235.0K</td>
          <td class="tg-dvpl">289.8K</td>
          <td class="tg-dvpl">351.1K</td>
          <td class="tg-dvpl">1.1K</td>
          <td class="tg-dvpl">1.5K</td>
          <td class="tg-dvpl">1.7K</td>
          <td class="tg-dvpl">408</td>
          <td class="tg-dvpl">496</td>
          <td class="tg-dvpl">553</td>
        </tr>
        <tr>
          <td class="tg-0pky">te</td>
          <td class="tg-0pky">507.7K</td>
          <td class="tg-dvpl">2.7K</td>
          <td class="tg-dvpl">861</td>
          <td class="tg-dvpl">194.1K</td>
          <td class="tg-dvpl">205.9K</td>
          <td class="tg-dvpl">347.8K</td>
          <td class="tg-dvpl">1.0K</td>
          <td class="tg-dvpl">1.0K</td>
          <td class="tg-dvpl">2.0K</td>
          <td class="tg-dvpl">263</td>
          <td class="tg-dvpl">482</td>
          <td class="tg-dvpl">607</td>
        </tr>
        <tr>
          <td class="tg-0pky">ta</td>
          <td class="tg-0pky">497.9K</td>
          <td class="tg-dvpl">2.8K</td>
          <td class="tg-dvpl">49</td>
          <td class="tg-dvpl">177.7K</td>
          <td class="tg-dvpl">281.2K</td>
          <td class="tg-dvpl">282.2K</td>
          <td class="tg-dvpl">1.0K</td>
          <td class="tg-dvpl">1.5K</td>
          <td class="tg-dvpl">1.6K</td>
          <td class="tg-dvpl">26</td>
          <td class="tg-dvpl">34</td>
          <td class="tg-dvpl">22</td>
        </tr>
        <tr>
          <td class="tg-0pky">as</td>
          <td class="tg-0pky">10.3K</td>
          <td class="tg-dvpl">52</td>
          <td class="tg-dvpl">51</td>
          <td class="tg-dvpl">2.0K</td>
          <td class="tg-dvpl">1.8K</td>
          <td class="tg-dvpl">1.2K</td>
          <td class="tg-dvpl">18</td>
          <td class="tg-dvpl">5</td>
          <td class="tg-dvpl">3</td>
          <td class="tg-dvpl">11</td>
          <td class="tg-dvpl">7</td>
          <td class="tg-dvpl">6</td>
        </tr>
        <tr>
          <td class="tg-0pky">or</td>
          <td class="tg-0pky">196.8K</td>
          <td class="tg-dvpl">993</td>
          <td class="tg-dvpl">994</td>
          <td class="tg-dvpl">45.6K</td>
          <td class="tg-dvpl">59.4K</td>
          <td class="tg-dvpl">84.6K</td>
          <td class="tg-dvpl">225</td>
          <td class="tg-dvpl">268</td>
          <td class="tg-dvpl">386</td>
          <td class="tg-dvpl">229</td>
          <td class="tg-dvpl">266</td>
          <td class="tg-dvpl">431</td>
        </tr>
      </tbody>

      </table>
    color: default
    _template: table
  - body: "### Contributors\n\n*   Arnav Mhaske (AI4Bharat, IITM)\n*   Harshit Kedia (AI4Bharat, IITM)\n*   Sumanth Doddapaneni,\_(AI4Bharat, IITM)\n*   Mitesh Khapra, \_(AI4Bharat, IITM)\n*   Pratyush Kumar,\_\_(Microsoft,\_AI4Bharat, IITM)\n*   Rudra Murthy V, (IBM Research India,\_AI4Bharat, IITM)\\[mailto:rmurthyv@in.ibm.com]\n*   Anoop Kunchukuttan, (Microsoft,\_AI4Bharat, IITM)\\[mailto:ankunchu@microsoft.com]\n\nCorresponding authors: Rudra Murthy V, Anoop Kunchukuttan\n\n### Citing\n\nIf you are using any of the resources, please cite the following article:\n\nLanguage\n\n```\n@misc{mhaske2022naamapadam,  doi = {10.48550/ARXIV.2212.10168},  url = {https://arxiv.org/abs/2212.10168},  author = {Mhaske, Arnav and Kedia, Harshit and Doddapaneni, Sumanth and Khapra, Mitesh M. and Kumar, Pratyush and Murthy, Rudra and Kunchukuttan, Anoop},  title = {Naamapadam: A Large-Scale Named Entity Annotated Data for Indic Languages}  publisher = {arXiv},  year = {2022},}\n```\n\n### License\n\nNaamapadam is released under this licensing scheme:\n\n*   We do not own any of the text from which this data has been extracted.\n*   We license the actual packaging of this data under the\_[Creative Commons CC0 license (“no rights reserved”)]().\n*   To the extent possible under law,\_[AI4Bharat]()\_has waived all copyright and related or neighboring rights to\_Naamapadam.\n*   This work is published from: India.\n"
    _template: content
---

