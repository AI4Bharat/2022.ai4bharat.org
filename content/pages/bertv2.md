---
blocks:
  - body: >
      # IndicBERT v2


      IndicBERT v2 is a multilingual BERT model trained on IndicCorpv2, covering
      24 Indic languages. IndicBERT performs competitive to strong baselines and
      performs best on 7 out of 9 tasks on IndicXTREME benchmark.
    _template: content
  - body: >
      The models are trained with various objectives and datasets. The list of
      models are as follows:


      *   IndicBERT-MLM
      [Model](https://huggingface.co/ai4bharat/IndicBERTv2-MLM-only) - A vanilla
      BERT style model trained on IndicCorp v2 with the MLM objective

      *   \+Samanantar
      [Model](https://huggingface.co/ai4bharat/IndicBERTv2-MLM-Sam-TLM) - TLM as
      an additional objective with Samanantar Parallel Corpus
      [Paper](https://aclanthology.org/2022.tacl-1.9) |
      [Dataset](https://huggingface.co/datasets/ai4bharat/samanantar)\


      *   \+Back-Translation
      [Model](https://huggingface.co/ai4bharat/IndicBERTv2-MLM-Back-TLM) - TLM
      as an additional objective by translating the Indic parts of IndicCorp v2
      dataset into English w/ IndicTrans model
      [Model](https://github.com/AI4Bharat/indicTrans#download-model)

      *   IndicBERT-SS [Model](https://huggingface.co/ai4bharat/IndicBERTv2-SS)
      - To encourage better lexical sharing among languages we convert the
      scripts from Indic languages to Devanagari and train a BERT style model
      with the MLM objective
    _template: content
  - body: >
      All the code for pretraining and fine-tuning IndicBERT model is available
      at this [GitHub repository](https://github.com/AI4Bharat/IndicBERT/)
    _template: content
  - body: |
      # Citation

      ```
      @article{Doddapaneni2022towards,
        title={Towards Leaving No Indic Language Behind: Building Monolingual Corpora, Benchmark and Models for Indic Languages},
        author={Sumanth Doddapaneni and Rahul Aralikatte and Gowtham Ramesh and Shreyansh Goyal and Mitesh M. Khapra and Anoop Kunchukuttan and Pratyush Kumar},
        journal={ArXiv},
        year={2022},
        volume={abs/2212.05409}
      }
      ```
    _template: content
---

