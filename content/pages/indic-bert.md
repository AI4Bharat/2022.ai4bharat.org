---
blocks:
  - body: "# IndicBERT\n\n***\n\nIndicBERT is a multilingual ALBERT model trained on large-scale corpora, covering 12 major Indian languages: Assamese, Bengali, English, Gujarati, Hindi, Kannada, Malayalam, Marathi, Oriya, Punjabi, Tamil, Telugu. IndicBERT has much less parameters than other public models like mBERT and XLM-R while it still manages to give state of the art performance on several tasks.\n\n### Download Model\n\nThe model can be downloaded\_[here](https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/models/indic-bert-v1.tar.gz). Both tf checkpoints and pytorch binaries are included in the archive. Alternatively, you can also download it from\_[Huggingface](https://huggingface.co/ai4bharat/indic-bert).\n\n### Usage\n\nThe easiest way to use Indic BERT is through the Huggingface transformers library. It can be simply loaded like this:\n\n```\nfrom transformers import AutoModel, AutoTokenizer\n\ntokenizer = AutoTokenizer.from_pretrained('ai4bharat/indic-bert')\nmodel = AutoModel.from_pretrained('ai4bharat/indic-bert')\n\n```\n\n### Tutorials\n\nIf you want to quickly try experimenting with IndicBERT, we suggest checking out our tutorials and other fine-tuning notebooks that run on Google Colab:\n\n*   General Finetuning\_\n\n### Pretraining Details\n\nIndicBERT is pre-trained with IndicNLP corpus which covers 12 Indian languages (including English) The amount of pretraining data for each language is listed below:\n"
    _template: content
  - markdownTable: >-
      | Language          | as     | bn     | en     | gu     | hi     | kn    
      |         |

      | ----------------- | ------ | ------ | ------ | ------ | ------ | ------
      | ------- |

      | **No. of Tokens** | 36.9M  | 815M   | 1.34B  | 724M   | 1.84B  | 712M  
      |         |

      | **Language**      | **ml** | **mr** | **or** | **pa** | **ta** | **te**
      | **all** |

      | **No. of Tokens** | 767M   | 560M   | 104M   | 814M   | 549M   | 671M  
      | 8.9B    |
    color: default
    _template: table
  - body: "In total, the pretraining corpus has a size of 120GB and contains 8.9B tokens.\n\n### Evaluation\n\nWe evaluate IndicBERT model on a set of tasks as described in the\_[IndicGLUE page](https://indicnlp.ai4bharat.org/indic-glue). Here are the results that we obtain:\n\n#### IndicGLUE\n\nTaskmBERTXLM-RIndicBERTNews Article Headline Prediction89.5895.52**95.87**Wikipedia Section Title Prediction**73.66**66.3373.31Cloze-style multiple-choice QA39.1627.98**41.87**Article Genre Classification90.6397.03**97.34**Named Entity Recognition (F1-score)**73.24**65.9364.47Cross-Lingual Sentence Retrieval Task21.4613.74**27.12**Average64.6261.09**66.66**\n\n#### Additional Tasks\n\nTaskTask TypemBERTXLM-RIndicBERTBBC News ClassificationGenre Classification60.55**75.52**74.60IIT Product ReviewsSentiment Analysis74.57**78.97**71.32IITP Movie ReviewsSentiment Analaysis56.77**61.61**59.03Soham News ArticleGenre Classification80.23**87.6**78.45Midas DiscourseDiscourse Analysis71.20**79.94**78.44iNLTK Headlines ClassificationGenre Classification87.9593.38**94.52**ACTSA Sentiment AnalysisSentiment Analysis48.5359.33**61.18**Winograd NLINatural Language Inference56.3455.87**56.34**Choice of Plausible Alternative (COPA)Natural Language Inference54.9251.13**58.33**Amrita Exact ParaphraseParaphrase Detection**93.81**93.0293.75Amrita Rough ParaphraseParaphrase Detection83.3882.20**84.33**Average69.84**74.42**73.66\n\n\\* Note: all models have been restricted to a max\\_seq\\_length of 128.\n\n### Citing\n\nIf you are using any of the resources, please cite the following\_[paper](https://aclanthology.org/2020.findings-emnlp.445):\n\n```\n@inproceedings{kakwani2020indicnlpsuite,\n    title={{IndicNLPSuite: Monolingual Corpora, Evaluation Benchmarks and Pre-trained Multilingual Language Models for Indian Languages}},\n    author={Divyanshu Kakwani and Anoop Kunchukuttan and Satish Golla and Gokul N.C. and Avik Bhattacharyya and Mitesh M. Khapra and Pratyush Kumar},\n    year={2020},\n    booktitle={Findings of EMNLP},\n}\n\n```\n\n### License\n\nThe IndicBERT\_[code](https://github.com/AI4Bharat/indic-bert)\_(and\_[model](https://huggingface.co/ai4bharat/indic-bert)) are released under the MIT License.\n"
    _template: content
  - caption: IndicGLUE
    markdownTable: |-
      Task | mBERT | XLM-R | IndicBERT |
      -----| ----- | ----- | ------ |
      News Article Headline Prediction | 89.58 | 95.52 | **95.87** |
      Wikipedia Section Title Prediction| **73.66** | 66.33 | 73.31 |
      Cloze-style multiple-choice QA | 39.16 | 27.98 | **41.87** |
      Article Genre Classification | 90.63 | 97.03 | **97.34** |
      Named Entity Recognition (F1-score) | **73.24** | 65.93 | 64.47 | 
      Cross-Lingual Sentence Retrieval Task | 21.46 | 13.74 | **27.12** |
      Average | 64.62 | 61.09 | **66.66** |
    color: default
    _template: table
  - caption: Additional Tasks
    markdownTable: >-
      Task | Task Type | mBERT | XLM-R | IndicBERT |

      -----| ----- | ----- | ------ | ----- |

      BBC News Classification | Genre Classification | 60.55 | **75.52** | 74.60
      |

      IIT Product Reviews | Sentiment Analysis | 74.57 | **78.97** | 71.32 |

      IITP Movie Reviews | Sentiment Analaysis | 56.77 | **61.61** | 59.03 |

      Soham News Article | Genre Classification | 80.23 | **87.6** | 78.45 |

      Midas Discourse | Discourse Analysis | 71.20 | **79.94** | 78.44 |

      iNLTK Headlines Classification | Genre Classification | 87.95 | 93.38 |
      **94.52** |

      ACTSA Sentiment Analysis | Sentiment Analysis | 48.53 | 59.33 | **61.18**
      |

      Winograd NLI | Natural Language Inference | 56.34 | 55.87 | **56.34** |

      Choice of Plausible Alternative (COPA) | Natural Language Inference |
      54.92 | 51.13 | **58.33** |

      Amrita Exact Paraphrase | Paraphrase Detection | **93.81** | 93.02 | 93.75
      |

      Amrita Rough Paraphrase | Paraphrase Detection | 83.38 | 82.20 | **84.33**
      |

      Average |  |  69.84 | **74.42** | 73.66 |
    color: default
    _template: table
---

