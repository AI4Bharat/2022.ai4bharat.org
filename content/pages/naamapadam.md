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
  - body: "### Contributors\n\n*   Arnav Mhaske (AI4Bharat, IITM)\n*   Harshit Kedia (AI4Bharat, IITM)\n*   Sumanth Doddapaneni,\_(AI4Bharat, IITM)\n*   Mitesh Khapra, \_(AI4Bharat, IITM)\n*   Pratyush Kumar,\_\_(Microsoft,\_AI4Bharat, IITM)\n*   Rudra Murthy V, (IBM Research India,\_AI4Bharat, IITM) \\[mail: rmurthyv@in.ibm.com]\n*   Anoop Kunchukuttan, (Microsoft,\_AI4Bharat, IITM) \\[mail: ankunchu@microsoft.com]\n\nCorresponding authors: Rudra Murthy V, Anoop Kunchukuttan\n\n### Citing\n\nIf you are using any of the resources, please cite the following article:\n\nLanguage\n\n```\n@misc{mhaske2022naamapadam,  doi = {10.48550/ARXIV.2212.10168},  url = {https://arxiv.org/abs/2212.10168},  author = {Mhaske, Arnav and Kedia, Harshit and Doddapaneni, Sumanth and Khapra, Mitesh M. and Kumar, Pratyush and Murthy, Rudra and Kunchukuttan, Anoop},  title = {Naamapadam: A Large-Scale Named Entity Annotated Data for Indic Languages}  publisher = {arXiv},  year = {2022},}\n```\n\n### License\n\nNaamapadam is released under this licensing scheme:\n\n*   We do not own any of the text from which this data has been extracted.\n*   We license the actual packaging of this data under the\_[Creative Commons CC0 license (“no rights reserved”)]().\n*   To the extent possible under law,\_[AI4Bharat]()\_has waived all copyright and related or neighboring rights to\_Naamapadam.\n*   This work is published from: India.\n"
    _template: content
---

