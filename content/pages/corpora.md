---
blocks:
  - body: "# IndicCorp\n\n***\n\nIndicCorp has been developed by discovering and scraping thousands of web sources - primarily news, magazines and books, over a duration of several months.\n\nIndicCorp is one of the largest publicly-available corpora for Indian languages. It has also been used to train our released models which have obtained state-of-the-art performance on many tasks.\n\n### Corpus Format\n\nThe corpus is a single large text file containing one sentence per line. The\_[publicly released version](https://indicnlp.ai4bharat.org/corpora/#downloads)\_is randomly shuffled, untokenized and deduplicated.\n"
    _template: content
  - caption: Downloads
    markdownTable: >-
      | Language | \# News Articles* | Sentences     | Tokens        | Link    
      |

      | -------- | ----------------- | ------------- | ------------- | --------
      |

      | as       | 0.60M             | 1.39M   |  32.6M  |
      [link](https://ai4b-my.sharepoint.com/:u:/g/personal/sumanthdoddapaneni_ai4bharat_org/ETfz3fB3uKdCrfYY5h0K4QwBwuqeSQ17w6nMc1dlOda_eg?e=6nDbkl&download=1)
      |

      | bn       | 3.83M             | 39.9M | 836M  |
      [link](https://ai4b-my.sharepoint.com/:u:/g/personal/sumanthdoddapaneni_ai4bharat_org/EXlcZP77M2BLrVsFcpebcVEBDldXgCKh334weoWRbLRh4A?e=uGNaaF&download=1)
      |

      | en       | 3.49M             | 54.3M | 1.22B |
      [link](https://ai4b-my.sharepoint.com/:u:/g/personal/sumanthdoddapaneni_ai4bharat_org/EVtm9TAd_KNLue_107jFpwoBeY2Rml_pP-vNQtf-CgaIYA?e=ErTcU0&download=1)
      |

      | gu       | 2.63M             | 41.1M | 719M  |
      [link](https://ai4b-my.sharepoint.com/:u:/g/personal/sumanthdoddapaneni_ai4bharat_org/EawfDxTNnYZFvmH_Gzcc-PsB1EhVUrj-yPfdFSvc8zrOaA?e=wpe4iS&download=1)
      |

      | hi       | 4.95M             | 63.1M |  1.86B |
      [link](https://ai4b-my.sharepoint.com/:u:/g/personal/sumanthdoddapaneni_ai4bharat_org/EQ-iFqR25dpBsTvM5gtiq4gBKJEUjdOL7UaR7Qyq4BppXg?e=cM85WM&download=1)
      |

      | kn       | 3.76M             | 53.3M | 713M  |
      [link](https://ai4b-my.sharepoint.com/:u:/g/personal/sumanthdoddapaneni_ai4bharat_org/EZGVhzgIYi1EhOLAGFzWoI0BqnHi8Iz8TlLmOGMcJK93Ww?e=vfoCme&download=1)
      |

      | ml       | 4.75M             | 50.2M |  721M  |
      [link](https://ai4b-my.sharepoint.com/:u:/g/personal/sumanthdoddapaneni_ai4bharat_org/EQYtgDqJKtpLnoCVPvKvSvcBhh2mmeiqZhO58aRwS6UCVA?e=CbcQna&download=1)
      |

      | mr       | 2.31M             | 34.0M | 551M  |
      [link](https://ai4b-my.sharepoint.com/:u:/g/personal/sumanthdoddapaneni_ai4bharat_org/EU01E9LfSMJKlJQYObwLwRIBHD6gSet4uKbQwoTGqcb4YA?e=NNiPdh&download=1)
      |

      | or       | 0.69M             | 6.94M   | 107M   |
      [link](https://ai4b-my.sharepoint.com/:u:/g/personal/sumanthdoddapaneni_ai4bharat_org/ESMQWhhrUaJBlh1qiEcyrYcBno-0cVJyHjHzO8m1h2P0UA?e=toRScw&download=1)
      |

      | pa       | 2.64M             | 29.2M |  773M  |
      [link](https://ai4b-my.sharepoint.com/:u:/g/personal/sumanthdoddapaneni_ai4bharat_org/Ea_Am4EafJhPgCzAxm39BGEBGQbaVLQxShDr-bYOkuM2Vg?e=1DiReE&download=1)
      |

      | ta       | 4.41M             |  31.5M   |  582M  |
      [link](https://ai4b-my.sharepoint.com/:u:/g/personal/sumanthdoddapaneni_ai4bharat_org/ESWg98k00UZHv9ZikQH7ARsBQ1PPGIvV59FjOG3I6v9YVQ?e=lf4Idp&download=1)
      |

      | te       | 3.98M             | 47.9M   |  674M  |
      [link](https://ai4b-my.sharepoint.com/:u:/g/personal/sumanthdoddapaneni_ai4bharat_org/EShEqp0xf2dKoxLhRpre-s0BFsaPhgFTFrotIRj3-vfdHA?e=q8xCac&download=1)
      |
    color: default
    _template: table
  - body: "### Processing Corpus\n\nFor processing the corpus into other forms (tokenized, transliterated etc.), you can use the\_[indicnlp library](). As an example, the following code snippet can be used to tokenize the corpus:\n\nLanguage\n\n```\nfrom indicnlp.tokenize.indic_tokenize import trivial_tokenizefrom indicnlp.normalize.indic_normalize import IndicNormalizerFactory\nlang = 'kn'input_path = 'kn'output_path = 'kn.tok.txt'\nnormalizer_factory = IndicNormalizerFactory()normalizer = normalizer_factory.get_normalizer(lang)\ndef process_sent(sent):    normalized = normalizer.normalize(sent)    processed = ' '.join(trivial_tokenize(normalized, lang))    return processed\nwith open(input_path, 'r', encoding='utf-8') as in_fp,\\\t open(output_path, 'w', encoding='utf-8') as out_fp:    for line in in_fp.readlines():        sent = line.rstrip('\\n')        toksent = process_sent(sent)        out_fp.write(toksent)        out_fp.write('\\n')\n\n\n\n```\n\n### Citing\n\nIf you are using IndicGLUE, please cite the following article:\n\nLanguage\n\n```\n@inproceedings{kakwani2020indicnlpsuite,    title={{IndicNLPSuite: Monolingual Corpora, Evaluation Benchmarks and Pre-trained Multilingual Language Models for Indian Languages}},    author={Divyanshu Kakwani and Anoop Kunchukuttan and Satish Golla and Gokul N.C. and Avik Bhattacharyya and Mitesh M. Khapra and Pratyush Kumar},    year={2020},    booktitle={Findings of EMNLP},}\n\n```\n\n### License\n\nIndicCorp\_is released under this licensing scheme:\n\n*   We do not own any of the text from which this data has been extracted.\n*   We license the actual packaging of this data under the\_[Creative Commons CC0 license (“no rights reserved”)](http://creativecommons.org/publicdomain/zero/1.0).\n*   To the extent possible under law,\_[AI4Bharat](https://ai4bharat.iitm.ac.in/corpora \"IndicCorp\")\_has waived all copyright and related or neighboring rights to\_Samanantar\n*   This work is published from: India.\n"
    _template: content
---

