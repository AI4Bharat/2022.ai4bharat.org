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
      [link](https://objectstore.e2enetworks.net/ai4b-public-nlu-nlg/v1-indiccorp/as.txt)
      |

      | bn       | 3.83M             | 39.9M | 836M  |
      [link](https://objectstore.e2enetworks.net/ai4b-public-nlu-nlg/v1-indiccorp/bn.txt)
      |

      | en       | 3.49M             | 54.3M | 1.22B |
      [link](https://objectstore.e2enetworks.net/ai4b-public-nlu-nlg/v1-indiccorp/en.txt)
      |

      | gu       | 2.63M             | 41.1M | 719M  |
      [link](https://objectstore.e2enetworks.net/ai4b-public-nlu-nlg/v1-indiccorp/gu.txt)
      |

      | hi       | 4.95M             | 63.1M |  1.86B |
      [link](https://objectstore.e2enetworks.net/ai4b-public-nlu-nlg/v1-indiccorp/hi.txt)
      |

      | kn       | 3.76M             | 53.3M | 713M  |
      [link](https://objectstore.e2enetworks.net/ai4b-public-nlu-nlg/v1-indiccorp/kn.txt)
      |

      | ml       | 4.75M             | 50.2M |  721M  |
      [link](https://objectstore.e2enetworks.net/ai4b-public-nlu-nlg/v1-indiccorp/ml.txt)
      |

      | mr       | 2.31M             | 34.0M | 551M  |
      [link](https://objectstore.e2enetworks.net/ai4b-public-nlu-nlg/v1-indiccorp/mr.txt)
      |

      | or       | 0.69M             | 6.94M   | 107M   |
      [link](https://objectstore.e2enetworks.net/ai4b-public-nlu-nlg/v1-indiccorp/or.txt)
      |

      | pa       | 2.64M             | 29.2M |  773M  |
      [link](https://objectstore.e2enetworks.net/ai4b-public-nlu-nlg/v1-indiccorp/pa.txt)
      |

      | ta       | 4.41M             |  31.5M   |  582M  |
      [link](https://objectstore.e2enetworks.net/ai4b-public-nlu-nlg/v1-indiccorp/ta.txt)
      |

      | te       | 3.98M             | 47.9M   |  674M  |
      [link](https://objectstore.e2enetworks.net/ai4b-public-nlu-nlg/v1-indiccorp/te.txt)
      |
    color: default
    _template: table
  - body: "### Processing Corpus\n\nFor processing the corpus into other forms (tokenized, transliterated etc.), you can use the\_[indicnlp library](). As an example, the following code snippet can be used to tokenize the corpus:\n\nLanguage\n\n```\nfrom indicnlp.tokenize.indic_tokenize import trivial_tokenizefrom indicnlp.normalize.indic_normalize import IndicNormalizerFactory\nlang = 'kn'input_path = 'kn'output_path = 'kn.tok.txt'\nnormalizer_factory = IndicNormalizerFactory()normalizer = normalizer_factory.get_normalizer(lang)\ndef process_sent(sent):    normalized = normalizer.normalize(sent)    processed = ' '.join(trivial_tokenize(normalized, lang))    return processed\nwith open(input_path, 'r', encoding='utf-8') as in_fp,\\\t open(output_path, 'w', encoding='utf-8') as out_fp:    for line in in_fp.readlines():        sent = line.rstrip('\\n')        toksent = process_sent(sent)        out_fp.write(toksent)        out_fp.write('\\n')\n\n\n\n```\n\n### Citing\n\nIf you are using IndicCorp, please cite the following article:\n\nLanguage\n\n```\n@inproceedings{kakwani2020indicnlpsuite,    \n               title={{IndicNLPSuite: Monolingual Corpora, Evaluation Benchmarks and Pre-trained Multilingual Language Models for Indian Languages}},    \n               \n               \n               \n```\n\n### License\n\nIndicCorp\_is released under this licensing scheme:\n\n*   We do not own any of the text from which this data has been extracted.\n*   We license the actual packaging of this data under the\_[Creative Commons CC0 license (“no rights reserved”)](http://creativecommons.org/publicdomain/zero/1.0).\n*   To the extent possible under law,\_[AI4Bharat](https://ai4bharat.iitm.ac.in/corpora \"IndicCorp\")\_has waived all copyright and related or neighboring rights to\_Samanantar\n*   This work is published from: India.\n"
    _template: content
---

