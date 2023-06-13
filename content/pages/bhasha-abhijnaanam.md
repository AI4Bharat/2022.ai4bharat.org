---
blocks:
  - body: >
      # Bhasha-Abhijnaanam


      ***


      [Paper](http://arxiv.org/abs/2305.15814) |
      [Huggingface](https://huggingface.co/datasets/ai4bharat/Bhasha-Abhijnaanam)
      |
      [Benchmarking](https://github.com/AI4Bharat/IndicLID#evaluation-results)&#x20;


      Bhasha-Abhijnaanam is a language identification test set for&#x20;

      native-script as well as romanized text which spans 22 Indic languages.
      Benchmarking result on Bhasha-Abhijnaanam test set using
      [IndicLID](https://ai4bharat.iitm.ac.in/indiclid) model can be found
      [here](https://github.com/AI4Bharat/IndicLID#evaluation-results).  More
      details regarding Bhasha-Abhijnaanam can be in the
      [paper](http://arxiv.org/abs/2305.15814).&#x20;


      ### Downloads


      *   The Bhasha-Abhijnaanam dataset can be downloaded from the
      [Bhasha-Abhijnaanam Hugging Face
      repository](https://huggingface.co/datasets/ai4bharat/Bhasha-Abhijnaanam
      "")

      *   Bhasha-Abhijnaanam dataset is a JSONL file consisting of individual
      data instances comprising a unique identifier, native sentence, romanized
      sentence(if available), language, script and source.


      ### Test Set


      The language-wise statistics for Bhasha-Abhijnaanam is shown in the table
      with total number of sentences.
    color: default
    _template: content
  - markdownTable: >
      | Subset | asm | ben | brx | guj | hin | kan | kas (Perso-Arabic) | kas
      (Devanagari) | kok | mai | mal | mni (Bengali) | mni (Meetei Mayek) | mar
      | nep | ori | pan | san | sid | tam | tel | urd |

      |:------:|:---:|:---:|:---:|:---:|:---:|:---:|:------------------:|:----------------:|:---:|:---:|:---:|:-------------:|:------------------:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|

      | Native | 1012 | 5606 | 1500 | 5797 | 5617 | 5859 | 2511 | 1012 | 1500 |
      2512 | 5628 | 1012 | 1500 | 5611 | 2512 | 1012 | 5776 | 2510 | 2512 | 5893
      | 5779 | 5751 | 6883 |

      | Romanized | 512 | 4595 | 433 | 4785 | 4606 | 4848 | 450 | 0 | 444 | 439
      | 4617 | 0 | 442 | 4603 | 423 | 512 | 4765 | 448 | 0 | 4881 | 4767 | 4741
      | 4371 |
    color: default
    _template: table
  - body: "### Contributors\n\n*   Yash Madhani\_([AI4Bharat](https://ai4bharat.org/),\_[IITM](https://www.iitm.ac.in/))\n*   Mitesh M. Khapra\_([AI4Bharat](https://ai4bharat.org/),\_[IITM](https://www.iitm.ac.in/))\n*   Anoop Kunchukuttan\_([AI4Bharat](https://ai4bharat.org/),\_[Microsoft](https://www.microsoft.com/en-in/))\n\n### Citing\n\nIf you are using any of the resources, please cite the following article:\n\n```\n@misc{madhani2023bhashaabhijnaanam,\n      title={Bhasha-Abhijnaanam: Native-script and romanized Language Identification for 22 Indic languages}, \n      author={Yash Madhani and Mitesh M. Khapra and Anoop Kunchukuttan},\n      year={2023},\n      eprint={2305.15814},\n      archivePrefix={arXiv},\n      primaryClass={cs.CL}\n}\n\n```\n\n### License\n\nThis data is released under the following licensing scheme:\n\n*   Manually collected data: Released under CC0 license.\n\n**CC0 License Statement**\n\n*   We do not own any of the text from which this data has been extracted.\n*   We license the actual packaging of the mined data under the\_[Creative Commons CC0 license (“no rights reserved”)](http://creativecommons.org/publicdomain/zero/1.0).\n*   To the extent possible under law,\_[AI4Bharat](https://indicnlp.ai4bharat.org/aksharantar/)\_has waived all copyright and related or neighboring rights to\_Bhasha-Abhijnaanam\_manually collected data and existing sources.\n*   This work is published from: India.\n\n### Contact\n\n*   Anoop Kunchukuttan ([anoop.kunchukuttan@gmail.com](mailto:anoop.kunchukuttan@gmail.com))\n*   Mitesh Khapra ([miteshk@cse.iitm.ac.in](mailto:miteshk@cse.iitm.ac.in))\n*   Pratyush Kumar ([pratyush@cse.iitm.ac.in](mailto:pratyush@cse.iitm.ac.in))\n\n## Acknowledgements\n\nWe would like to thank the Ministry of Electronics and Information&#x20;\nTechnology of the Government of India for their generous grant through&#x20;\nthe Digital India Bhashini project. We also thank the Centre for&#x20;\nDevelopment of Advanced Computing for providing compute time on the&#x20;\nParam Siddhi Supercomputer. We also thank Nilekani Philanthropies for&#x20;\ntheir generous grant towards building datasets, models, tools and&#x20;\nresources for Indic languages. We also thank Microsoft for their grant&#x20;\nto support research on Indic languages. We would like to thank Jay Gala&#x20;\nand Ishvinder Sethi for their help in coordinating the annotation work.&#x20;\nMost importantly we would like to thank all the annotators who helped&#x20;\ncreate the Bhasha-Abhijnaanam benchmark.\n"
    _template: content
---

