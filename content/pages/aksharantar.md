---
blocks:
  - body: "# Aksharantar\n\n***\n\n[Paper](https://arxiv.org/abs/2205.03018) | [Huggingface](https://huggingface.co/datasets/ai4bharat/Aksharantar/) | [Benchmarking](https://github.com/AI4Bharat/IndicXlit#evaluation-results \"\")&#x20;\n\nAksharantar is the largest publicly available transliteration dataset for 21 Indic languages. The corpus has 26M Indic language-English transliteration pairs. Benchmarking result on Aksharantar test set using [IndicXlit](https://ai4bharat.iitm.ac.in/indic-xlit) model can be found [here](https://github.com/AI4Bharat/IndicXlit#evaluation-results).  More details regarding Aksharantar can be in the [paper](https://arxiv.org/abs/2205.03018).\n\n### Downloads\n\n*   The Aksharantar dataset can be downloaded from the\_[Aksharantar Hugging Face repository](https://huggingface.co/datasets/ai4bharat/Aksharantar/tree/main).\n*   Each language-pair corpus in the Aksharantar dataset is split into training, validation and test subsets. Each subset is a JSONL file consisting of individual data instances comprising a unique identifier, native word, English word, transliteration source and a score (if applicable).\n*   Individual language-pair download links are provided in the\_[data split](https://github.com/SushaneP/indicnlp.ai4bharat.org/edit/master/content/pages/aksharantar.md#data-split)\_below.\n\n### Data Split\n\nThe language-wise splits for Aksharantar is shown in the table with total number of word pairs (in millions). Individual download links for each language-pair are as against the hyperlink.\n"
    color: default
    _template: content
  - markdownTable: >-
      | Subset |
      [as-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/asm.zip)
      (4.72 MB)|
      [bn-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/ben.zip)
      (31.5 MB) |
      [brx-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/brx.zip)
      (0.933 MB) |
      [gu-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/guj.zip)
      (29.5 MB)|
      [hi-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/hin.zip)
      (31.4 MB) |
      [kn-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/kan.zip)
      (83.7 MB) |
      [ks-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/kas.zip)
      (1.1 MB) |
      [kok-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/kok.zip)
      (16.6 MB) |
      [mai-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/mai.zip)
      (6.74 MB) |
      [ml-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/mal.zip)
      (125 MB) |
      [mni-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/mni.zip)
      (0.313 MB) |
      [mr-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/mar.zip)
      (39.9 MB) |
      [ne-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/nep.zip)
      (67 MB) |
      [or-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/ori.zip)
      (9.09 MB) |
      [pa-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/pan.zip)
      (12.1 MB) |
      [sa-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/san.zip)
      (56 MB) |
      [sd-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/sid.zip)
      (1.37 MB) |
      [ta-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/tam.zip)
      (92.7 MB) |
      [te-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/tel.zip)
      (69.1 MB) |
      [ur-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/urd.zip)
      (17 MB) |

      |:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|

      | Training | 179K | 1231K | 36K | 1143K | 1299K | 2907K | 47K | 613K |
      283K | 4101K | 10K | 1453K | 2397K | 346K | 515K | 1813K | 60K | 3231K |
      2430K | 699K |

      | Validation | 4K | 11K | 3K | 12K | 6K | 7K | 4K | 4K | 4K | 8K | 3K | 8K
      | 3K | 3K | 9K | 3K | 8K | 9K | 8K | 12K |

      | Test | 5531 | 5009 | 4136 | 7768 | 5693 | 6396 | 7707 | 5093 | 5512 |
      6911 | 4925 | 6573 | 4133 | 4256 | 4316 | 5334 | - | 4682 | 4567 | 4463 |
    color: default
    _template: table
  - body: "### Change Log\n\n*   07 May 2022 - The Aksharantar dataset is now available for download.\n\n### Contributors\n\n*   Yash Madhani\_([AI4Bharat](https://ai4bharat.org/),\_[IITM](https://www.iitm.ac.in/))\n*   Sushane Parthan\_([AI4Bharat](https://ai4bharat.org/),\_[IITM](https://www.iitm.ac.in/))\n*   Priyanka Bedekar\_([AI4Bharat](https://ai4bharat.org/),\_[IITM](https://www.iitm.ac.in/))\n*   Ruchi Khapra\_([AI4Bharat](https://ai4bharat.org/))\n*   Gokul NC ([AI4Bharat](https://ai4bharat.org/))\n*   Anoop Kunchukuttan\_([AI4Bharat](https://ai4bharat.org/),\_[Microsoft](https://www.microsoft.com/en-in/))\n*   Pratyush Kumar\_([AI4Bharat](https://ai4bharat.org/),\_[IITM](https://www.iitm.ac.in/),\_[Microsoft](https://www.microsoft.com/en-in/))\n*   Mitesh Shantadevi Khapra\_([AI4Bharat](https://ai4bharat.org/),\_[IITM](https://www.iitm.ac.in/))\n\n### Citing\n\nIf you are using any of the resources, please cite the following article:\n\n```\n@misc{madhani2022aksharantar,\n      title={Aksharantar: Towards Building Open Transliteration Tools for the Next Billion Users}, \n      author={Yash Madhani and Sushane Parthan and Priyanka Bedekar and Ruchi Khapra and Anoop Kunchukuttan and Pratyush Kumar and Mitesh Shantadevi Khapra},\n      year={2022},\n      eprint={},\n      archivePrefix={arXiv},\n      primaryClass={cs.CL}\n}\n\n```\n\n### License\n\nThis data is released under the following licensing scheme:\n\n*   Manually collected data: Released under CC-BY license.\n*   Mined dataset (from Samanantar and IndicCorp): Released under CC0 license.\n*   Existing sources: Released under CC0 license.\n\n**CC-BY License**\n\n**CC0 License Statement**\n\n*   We do not own any of the text from which this data has been extracted.\n*   We license the actual packaging of the mined data under the\_[Creative Commons CC0 license (“no rights reserved”)](http://creativecommons.org/publicdomain/zero/1.0).\n*   To the extent possible under law,\_[AI4Bharat](https://indicnlp.ai4bharat.org/aksharantar/)\_has waived all copyright and related or neighboring rights to\_Aksharantar\_manually collected data and existing sources.\n*   This work is published from: India.\n\n### Contact\n\n*   Anoop Kunchukuttan ([anoop.kunchukuttan@gmail.com](mailto:anoop.kunchukuttan@gmail.com))\n*   Mitesh Khapra ([miteshk@cse.iitm.ac.in](mailto:miteshk@cse.iitm.ac.in))\n*   Pratyush Kumar ([pratyush@cse.iitm.ac.in](mailto:pratyush@cse.iitm.ac.in))\n\n## Acknowledgements\n\nWe would like to thank EkStep Foundation for their generous grant which helped in setting up the Centre for AI4Bharat at IIT Madras to support our students, research staff, data and computational requirements. We would like to thank The Ministry of Electronics and Information Technology (NLTM) for its grant to support the creation of datasets and models for Indian languages under its ambitious Bhashini project. We would also like to thank the Centre for Development of Advanced Computing, India (C-DAC) for providing access to the Param Siddhi supercomputer for training our models. Lastly, we would like to thank Microsoft for its grant to create datasets, tools and resources for Indian languages.\n"
    _template: content
---

