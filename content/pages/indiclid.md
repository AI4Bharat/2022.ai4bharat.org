---
blocks:
  - body: "# ***IndicLID***\n\n[Github](https://github.com/AI4Bharat/IndicLID \"\")[\_|\_Downloads](https://github.com/AI4Bharat/IndicLID#download-indiclid-model \"\")\_|\_[Paper](http://arxiv.org/abs/2305.15814 \"\")\\\n\\\n***IndicLID***, is a language identifier for ***all 22 Indian languages*** listed in the Indian constitution in both native-script and romanized text. IndicLID is the ***first LID for romanized text in Indian languages***.\n&#x20;It is a two stage classifier that is ensemble of a fast linear&#x20;\nclassifier and a slower classifier finetuned from a pre-trained LM. It&#x20;\ncan ***predict 47 classes (24 native-script classes and 21 roman-script classes plus English and Others)***. All the classes are listed below.\n"
    _template: content
  - markdownTable: |-
      | Language | IndicLID Code | 
      |----------|---------------|
      | Assamese (Bengali script) | asm_Beng |  
      | Assamese (Latin script) | asm_Latn |  
      | Bangla (Bengali script) | ben_Beng |  
      | Bangla (Latin script) | ben_Latn |  
      | Bodo (Devanagari script) | brx_Deva |  
      | Bodo (Latin script) | brx_Latn |  
      | Dogri (Devanagari script) | doi_Deva |  
      | Dogri (Latin script) | doi_Latn | 
      | English (Latin script) | eng_Latn |  
      | Gujarati (Gujarati script) | guj_Gujr |  
      | Gujarati (Latin script) | guj_Latn |  
      | Hindi (Devanagari script) | hin_Deva |  
      | Hindi (Latin script) | hin_Latn |  
      | Kannada (Kannada script) | kan_Knda |  
      | Kannada (Latin script) | kan_Latn |  
      | Kashmiri (Perso_Arabic script) | kas_Arab |  
      | Kashmiri (Devanagari script) | kas_Deva |  
      | Kashmiri (Latin script) | kas_Latn |  
      | Konkani (Devanagari script) | kok_Deva |  
      | Konkani (Latin script) | kok_Latn |  
      | Maithili (Devanagari script) | mai_Deva |  
      | Maithili (Latin script) | mai_Latn |  
      | Malayalam (Malayalam script) | mal_Mlym |  
      | Malayalam (Latin script) | mal_Latn |  
      | Manipuri (Bengali script) | mni_Beng |  
      | Manipuri (Meetei_Mayek script) | mni_Meti |  
      | Manipuri (Latin script) | mni_Latn |  
      | Marathi (Devanagari script) | mar_Deva |  
      | Marathi (Latin script) | mar_Latn |  
      | Nepali (Devanagari script) | nep_Deva |  
      | Nepali (Latin script) | nep_Latn |  
      | Oriya (Oriya script) | ori_Orya |  
      | Oriya (Latin script) | ori_Latn |  
      | Panjabi (Gurmukhi script) | pan_Guru |  
      | Panjabi (Latin script) | pan_Latn |  
      | Sanskrit (Devanagari script) | san_Deva |  
      | Sanskrit (Latin script) | san_Latn |  
      | Santali (Ol_Chiki  script) | sat_Olch |  
      | Sindhi (Perso_Arabic script) | snd_Arab |  
      | Sindhi (Latin script) | snd_Latn |  
      | Tamil (Tamil script) | tam_Tamil |  
      | Tamil (Latin script) | tam_Latn |  
      | Telugu (Telugu script) | tel_Telu |  
      | Telugu (Latin script) | tel_Latn |  
      | Urdu (Perso_Arabic script) | urd_Arab |  
      | Urdu (Latin script) | urd_Latn |  
      | Other | other |
    color: default
    _template: table
  - body: >
      ## **Know more about IndicLID**


      You can visit the [IndicLID](https://github.com/AI4Bharat/IndicLID) page
      to know more about the models including:&#x20;


      *   Downloading IndicLID

      *   Using the publicly available models

      *   IndicLID accuracy

      *   IndicLID evaluation script
    _template: content
  - body: "## Citing\n\nIf you are using any of the resources, please cite the following article:\n\n```\n@misc{madhani2023bhashaabhijnaanam,\n      title={Bhasha-Abhijnaanam: Native-script and romanized Language Identification for 22 Indic languages}, \n      author={Yash Madhani and Mitesh M. Khapra and Anoop Kunchukuttan},\n      year={2023},\n      eprint={2305.15814},\n      archivePrefix={arXiv},\n      primaryClass={cs.CL}\n}\n\n```\n\nWe would like to hear from you if:\n\n*   You are using our resources. Please let us know how you are putting these resources to use.\n*   You have any feedback on these resources.\n\n### License\n\nThe IndicLID code (and models) are released under the MIT License.\n\n### Contributors\n\n*   Yash Madhani\_([AI4Bharat](https://ai4bharat.org/),\_[IITM](https://www.iitm.ac.in/))\n*   Mitesh M. Khapra\_([AI4Bharat](https://ai4bharat.org/),\_[IITM](https://www.iitm.ac.in/))\n*   Anoop Kunchukuttan\_([AI4Bharat](https://ai4bharat.org/),\_[Microsoft](https://www.microsoft.com/en-in/))\n\n### Contact\n\n*   Anoop Kunchukuttan ([anoop.kunchukuttan@gmail.com](mailto:anoop.kunchukuttan@gmail.com))\n*   Mitesh Khapra ([miteshk@cse.iitm.ac.in](mailto:miteshk@cse.iitm.ac.in))\n*   Pratyush Kumar ([pratyush@cse.iitm.ac.in](mailto:pratyush@cse.iitm.ac.in))\n\n## Acknowledgements\n\nWe would like to thank the Ministry of Electronics and Information&#x20;\nTechnology of the Government of India for their generous grant through&#x20;\nthe Digital India Bhashini project. We also thank the Centre for&#x20;\nDevelopment of Advanced Computing for providing compute time on the&#x20;\nParam Siddhi Supercomputer. We also thank Nilekani Philanthropies for&#x20;\ntheir generous grant towards building datasets, models, tools and&#x20;\nresources for Indic languages. We also thank Microsoft for their grant&#x20;\nto support research on Indic languages. We would like to thank Jay Gala&#x20;\nand Ishvinder Sethi for their help in coordinating the annotation work.&#x20;\nMost importantly we would like to thank all the annotators who helped&#x20;\ncreate the Bhasha-Abhijnaanam benchmark.\n"
    _template: content
---

