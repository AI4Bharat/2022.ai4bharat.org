---
blocks:
  - body: >
      # IndicXTREME


      To evaluate language models on Indic languages, we need a robust
      human-annotated NLU benchmark consisting of 9 tasks across 18 Indic
      languages.&#x20;
    _template: content
  - body: >
      IndicXTREME benchmark includes 9 tasks that can be broadly grouped into
      sentence classification (5), structure prediction (2), question answering
      (1), and sentence retrieval (1).


      The list of tasks are as follows:


      \- IndicCOPA -
      [Dataset](https://huggingface.co/datasets/ai4bharat/IndicCOPA) - We
      manually translate the
      [COPA](https://people.ict.usc.edu/~gordon/publications/AAAI-SPRING11A.PDF)
      test set into 18 Indic languages to create IndicCOPA


      \- IndicQA - [Dataset](https://huggingface.co/datasets/ai4bharat/IndicQA)
      - A manually curated cloze-style reading comprehension dataset that can be
      used for evaluating question-answering models in 11 Indic languages


      \- IndicXParaphrase -
      [Dataset](https://huggingface.co/datasets/ai4bharat/IndicXParaphrase) - A
      new, multilingual, and n-way parallel dataset for paraphrase detection in
      10 Indic languages


      \- IndicSentiment -
      [Dataset](https://huggingface.co/datasets/ai4bharat/IndicSentiment) - A
      new, multilingual, and n-way parallel dataset for sentiment analysis in 13
      Indic languages


      \- IndicXNLI -
      [Dataset](https://huggingface.co/datasets/Divyanshu/indicxnli) -
      Automatically translated version of XNLI in 11 Indic languages. Created by
      Divyanshu et. al. in [this
      paper](https://aclanthology.org/2022.emnlp-main.755/)


      \- Naamapadam -
      [Dataset](https://huggingface.co/datasets/ai4bharat/naamapadam) - NER
      dataset with manually curated testsets for 9 Indic languages. Created by
      Arnav et. al in [this paper](https://arxiv.org/abs/2212.10168)


      \- MASSIVE -
      [Dataset](https://github.com/alexa/massive#accessing-and-processing-the-data)
      - This in an intent classification and slot-filling dataset created using
      user queries collected by Amazon Alexa for 7 Indic languages. Created by
      FitzGerald et. al. in [this paper](https://arxiv.org/abs/2204.08582)


      \- FLORES - [Dataset](https://huggingface.co/datasets/facebook/flores) -
      To evaluate the retrieval capabilities of models, we include the Indic
      parts of the FLORES-101 dataset. Available in 18 Indic languages. Created
      by NLLB Team et. al. in [this paper](https://arxiv.org/abs/2207.04672)
    _template: content
  - body: >
      For more information about the datasets and the models, please refer to
      the [GitHub repository ](https://github.com/AI4Bharat/IndicBERT/)
    _template: content
  - body: "### Contributors\n\n*   Sumanth Doddapaneni (AI4Bharat, IITM)\n*   Rahul Aralikatte (McGill, MILA)\n*   Gowtham Ramesh,\_(AI4Bharat, IITM)\n*   Shreya Goyal, (AI4Bharat)\n*   Mitesh Khapra, \_(AI4Bharat, IITM)\n*   Anoop Kunchukuttan, (Microsoft,\_AI4Bharat, IITM)\n*   Pratyush Kumar,\_\_(Microsoft,\_AI4Bharat, IITM)\n\nCorresponding authors: Sumanth Doddapaneni\n\n### Citing\n\nIf you are using any of the resources, please cite the following article:\n\n```\n@article{Doddapaneni2022towards,\n  title={Towards Leaving No Indic Language Behind: Building Monolingual Corpora, Benchmark and Models for Indic Languages},\n  author={Sumanth Doddapaneni and Rahul Aralikatte and Gowtham Ramesh and Shreyansh Goyal and Mitesh M. Khapra and Anoop Kunchukuttan and Pratyush Kumar},\n  journal={ArXiv},\n  year={2022},\n  volume={abs/2212.05409}\n}\n```\n\n### License\n\nIndicXTREME is released under this licensing scheme:\n\n*   We do not own any of the text from which this data has been extracted.\n*   We license the actual packaging of this data under the\_[Creative Commons CC0 license (“no rights reserved”)]().\n*   To the extent possible under law,\_[AI4Bharat]()\_has waived all copyright and related or neighboring rights to\_IndicXTREME.\n*   This work is published from: India.\n"
    _template: content
---

