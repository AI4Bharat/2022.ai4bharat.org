---
blocks:
  - tagline: ''
    headline: IndicTrans2
    text: >
      The first open-source transformer-based multilingual NMT model that
      supports high-quality translations across all the 22 scheduled Indic
      languages
    _template: hero
  - body: >
      [Preprint is available here](https://arxiv.org/abs/2305.16307)


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
  - body: |
      ## Download Models and Other Artifacts
    _template: content
  - caption: Multilingual Translation Models
    markdownTable: >-
      | Model                                     | En-Indic | Indic-En |
      Evaluations           |

      |-------------------------------------------|----------|----------|-----------------------|

      | Preprint (used for benchmarking)          |
      [download](https://indictrans2-public.objectstore.e2enetworks.net/it2_preprint_ckpts/en-indic-preprint.zip)
      |
      [download](https://indictrans2-public.objectstore.e2enetworks.net/it2_preprint_ckpts/indic-en-preprint.zip)
      |
      [translations](https://indictrans2-public.objectstore.e2enetworks.net/translation_outputs.zip)
      (as of May 10, 2023),
      [metrics](https://drive.google.com/drive/folders/1lOOdaU0VdRSBgJEsNav5zC7wwLBis9NI?usp=sharing)
      |

      | Deployment (recommend for commercial use) |
      [download](https://indictrans2-public.objectstore.e2enetworks.net/it2_deployment_ckpts/en-indic-deploy.zip)
      |
      [download](https://indictrans2-public.objectstore.e2enetworks.net/it2_deployment_ckpts/indic-en-deploy.zip)
      |                       |
    color: default
    _template: table
  - caption: Training Data
    markdownTable: >-
      | Data                                     | URL      |

      |------------------------------------------|----------|

      | Bharat Parallel Corpus Collection (BPCC) |
      [download](https://indictrans2-public.objectstore.e2enetworks.net/BPCC.zip)
      |

      | Back-translation (BPCC-BT)               |
      [download](https://indictrans2-public.objectstore.e2enetworks.net/BT_data.zip)
      |
    color: default
    _template: table
  - caption: Evaluation Data
    markdownTable: >-
      | Data                    | URL      |

      |-------------------------|----------|

      | IN22 test set           |
      [download](https://indictrans2-public.objectstore.e2enetworks.net/IN22_testset.zip)
      |

      | FLORES-22 Indic dev set |
      [download](https://indictrans2-public.objectstore.e2enetworks.net/flores-22_dev.zip)
      |
    color: default
    _template: table
  - body: >
      ## Installation


      Instructions to setup and install everything before running the code.


      ```bash

      # Clone the github repository and navigate to the project directory.

      git clone https://github.com/AI4Bharat/IndicTrans2

      cd IndicTrans2


      # Install all the dependencies and requirements associated with the
      project.

      bash install.sh

      ```


      Note: We recommend creating a virtual environment with python>=3.7.\\


      ## Data


      Training\

      Bharat Parallel Corpus Collection (BPCC) is a comprehensive and publicly
      available parallel corpus that includes both existing and new data for all
      22 scheduled Indic languages. It is comprised of two parts: BPCC-Mined and
      BPCC-Human, totaling approximately 230 million bitext pairs. BPCC-Mined
      contains about 228 million pairs, with nearly 126 million pairs newly
      added as a part of this work. On the other hand, BPCC-Human consists of
      2.2 million gold standard English-Indic pairs, with an additional 644K
      bitext pairs from English Wikipedia sentences (forming the BPCC-H-Wiki
      subset) and 139K sentences covering everyday use cases (forming the
      BPCC-H-Daily subset). It is worth highlighting that BPCC provides the
      first available datasets for 7 languages and significantly increases the
      available data for all languages covered.


      You can find the contribution from different sources in the following
      table:
    _template: content
  - markupTable: |-
      <table>
      <tbody>
        <tr>
          <td rowspan="4">BPCC-Mined</th>
          <td rowspan="2">Existing</th>
          <td>Samanantar</th>
          <td>19.4M</th>
        </tr>
        <tr>
          <td>NLLB</th>
          <td>85M</th>
        </tr>
        <tr>
          <td rowspan="2">Newly Added</th>
          <td>Samanantar++</th>
          <td>121.6M</th>
        </tr>
        <tr>
          <td>Comparable</th>
          <td>4.3M</th>
        </tr>
        <tr>
          <td rowspan="5">BPCC-Human</td>
          <td rowspan="3">Existing</td>
          <td>NLLB</td>
          <td>18.5K</td>
        </tr>
        <tr>
          <td>ICLI</td>
          <td>1.3M</td>
        </tr>
        <tr>
          <td>Massive</td>
          <td>115K</td>
        </tr>
        <tr>
          <td rowspan="2">Newly Added</td>
          <td>Wiki</td>
          <td>644K</td>
        </tr>
        <tr>
          <td>Daily</td>
          <td>139K</td>
        </tr>
      </tbody>
      </table>
    color: default
    _template: table
  - body: >
      Additionally, we provide augmented back-translation data generated by our
      intermediate IndicTrans2 models for training purposes. Please refer our
      paper for more details on the selection of sample proportions and sources.
    _template: content
  - markupTable: |-
      <table>
      <tbody>
        <tr>
          <td>English BT data (English Original)</td>
          <td>401.9M</td>
        </tr>
        <tr>
          <td>Indic BT data (Indic Original)</td>
          <td>400.9M</td>
        </tr>
      </tbody>
      </table>
    color: default
    _template: table
  - body: >
      ### Evaluation


      IN22 test set is a newly created comprehensive benchmark for evaluating
      machine translation performance in multi-domain, n-way parallel contexts
      across 22 Indic languages. It has been created from three distinct
      subsets, namely IN22-Wiki, IN22-Web and IN22-Conv. The Wikipedia and Web
      sources subsets offer diverse content spanning news, entertainment,
      culture, legal, and India-centric topics.  IN22-Wiki and IN22-Web have
      been combined and considered for evaluation purposes and released as
      IN22-Gen. Meanwhile, IN22-Conv the conversation domain subset is designed
      to assess translation quality in typical day-to-day conversational-style
      applications.
    _template: content
  - markupTable: |-
      <table>
      <tbody>
        <tr>
          <td>IN22-Gen (IN22-Wiki + IN22-Web)</td>
          <td>1024 sentences</td>
        </tr>
        <tr>
          <td>IN22-Conv</td>
          <td>1503 sentences</td>
        </tr>
      </tbody>
      </table>
    color: default
    _template: table
  - body: >
      For more details about running the model, visit our [GitHub
      Repository](https://github.com/AI4Bharat/IndicTrans2)&#x20;
    _template: content
  - body: >
      License\\


      The mined corpora collection (BPCC-Mined), existing seed corpora
      (NLLB-Seed, ILCI, MASSIVE), Backtranslation data (BPCC-BT), are released
      under the following licensing scheme:


      *   We do not own any of the text from which this data has been extracted.

      *   We license the actual packaging of this data under the Creative
      Commons [CC0 license (“no rights
      reserved”)](https://creativecommons.org/share-your-work/public-domain/cc0/).

      *   To the extent possible under law,
      [AI4Bharat](https://ai4bharat.iitm.ac.in/) has waived all copyright and
      related or neighboring rights to BPCC-Mined, existing seed corpora
      (NLLB-Seed, ILCI, MASSIVE) and BPCC-BT.


      The following table lists the licenses associated with the different
      artifacts released as a part of this work:
    _template: content
  - markdownTable: >-
      | Artifact                                              | LICENSE   |

      |-------------------------------------------------------|-----------|

      | Existing Mined Corpora (NLLB & Samanantar)            |
      [CC0](https://creativecommons.org/share-your-work/public-domain/cc0/)      
      |

      | Existing Seed Corpora (NLLB-Seed, ILCI, MASSIVE)           |
      [CC0](https://creativecommons.org/share-your-work/public-domain/cc0/)      
      |

      | Newly Added Mined Corpora (Samanantar++ & Comparable) |
      [CC0](https://creativecommons.org/share-your-work/public-domain/cc0/)      
      |

      | Newly Added Seed Corpora (BPCC-H-Wiki & BPCC-H-Daily)               |
      [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/) |

      | Newly Created IN-22 test set (IN22-Gen &
      IN22-Conv)                          |
      [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/) |

      | Back-translation data (BPCC-BT)                       |
      [CC0](https://creativecommons.org/share-your-work/public-domain/cc0/)      
      |

      | Model checkpoints                                     |
      [MIT](https://github.com/ai4bharat/IndicTrans2/blob/main/LICENSE)       |
    color: default
    _template: table
  - body: |
      ## Citation

      ```
      @article{ai4bharat2023indictrans2,
        title   = {IndicTrans2: Towards High-Quality and Accessible Machine Translation Models for all 22 Scheduled Indian Languages},
        author  = {AI4Bharat and Jay Gala and Pranjal A. Chitale and Raghavan AK and Sumanth Doddapaneni and Varun Gumma and Aswanth Kumar and Janki Nawale and Anupama Sujatha and Ratish Puduppully and Vivek Raghavan and Pratyush Kumar and Mitesh M. Khapra and Raj Dabre and Anoop Kunchukuttan},
        year    = {2023},
        journal = {arXiv preprint arXiv: 2305.16307}
      }
      ```
    _template: content
---

