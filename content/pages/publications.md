---
blocks:
  - quote: Publications
    color: tint
    _template: testimonial
  - quote: '2020'
    author: ''
    color: default
    _template: testimonial
  - items:
      - icon:
          color: ''
          style: float
          name: ''
        title: >-
          IndicNLPSuite: Monolingual Corpora, Evaluation Benchmarks and
          Pre-trained Multilingual Language Models for Indian Languages
        link: 'https://aclanthology.org/2020.findings-emnlp.445/'
        comingSoon: false
        updated: false
        pointerDetail1: >-
          Divyanshu Kakwani, Anoop Kunchukuttan, Satish Golla, Gokul N.C., Avik
          Bhattacharyya, Mitesh M. Khapra, Pratyush Kumar
        pointerDetail2: November 2020
        text: >-
          In this paper, we introduce NLP resources for 11 major Indian
          languages from two major language families. These resources include:
          (a) large-scale sentence-level monolingual corpora, (b) pre-trained
          word embeddings, (c) pre-trained language models, and (d) multiple NLU
          evaluation datasets (IndicGLUE benchmark). The monolingual corpora
          contains a total of 8.8 billion tokens across all 11 languages and
          Indian English, primarily sourced from news crawls. The word
          embeddings are based on FastText, hence suitable for handling
          morphological complexity of Indian languages. The pre-trained language
          models are based on the compact ALBERT model. Lastly, we compile the
          (IndicGLUE benchmark for Indian language NLU. To this end, we create
          datasets for the following tasks: Article Genre Classification,
          Headline Prediction, Wikipedia Section-Title Prediction, Cloze-style
          Multiple choice QA, Winograd NLI and COPA. We also include publicly
          available datasets for some Indic languages for tasks like Named
          Entity Recognition, Cross-lingual Sentence Retrieval, Paraphrase
          detection, etc. Our embeddings are competitive or better than existing
          pre-trained embeddings on multiple tasks. We hope that the
          availability of the dataset will accelerate Indic NLP research which
          has the potential to impact more than a billion people. It can also
          help the community in evaluating advances in NLP over a more diverse
          pool of languages. The data and models are available at
          https://indicnlp.ai4bharat.org.
    _template: featuresAlt
  - quote: '2021'
    author: Phil Karlton
    color: default
    _template: testimonial
  - items:
      - icon:
          color: ''
          style: float
          name: ''
        title: Perturbation CheckLists for Evaluating NLG Evaluation Metrics
        link: 'https://aclanthology.org/2021.emnlp-main.575/'
        comingSoon: false
        updated: false
        pointerDetail1: >-
          Ananya B. Sai, Tanay Dixit, Dev Yashpal Sheth, Sreyas Mohan, Mitesh M.
          Khapra
        pointerDetail2: November 2021
        text: >-
          Natural Language Generation (NLG) evaluation is a multifaceted task
          requiring assessment of multiple desirable criteria, e.g., fluency,
          coherency, coverage, relevance, adequacy, overall quality, etc. Across
          existing datasets for 6 NLG tasks, we observe that the human
          evaluation scores on these multiple criteria are often not correlated.
          For example, there is a very low correlation between human scores on
          fluency and data coverage for the task of structured data to text
          generation. This suggests that the current recipe of proposing new
          automatic evaluation metrics for NLG by showing that they correlate
          well with scores assigned by humans for a single criteria (overall
          quality) alone is inadequate. Indeed, our extensive study involving 25
          automatic evaluation metrics across 6 different tasks and 18 different
          evaluation criteria shows that there is no single metric which
          correlates well with human scores on all desirable criteria, for most
          NLG tasks. Given this situation, we propose CheckLists for better
          design and evaluation of automatic metrics. We design templates which
          target a specific criteria (e.g., coverage) and perturb the output
          such that the quality gets affected only along this specific criteria
          (e.g., the coverage drops). We show that existing evaluation metrics
          are not robust against even such simple perturbations and disagree
          with scores assigned by humans to the perturbed output. The proposed
          templates thus allow for a fine-grained assessment of automatic
          evaluation metrics exposing their limitations and will facilitate
          better design, analysis and evaluation of such metrics. Our templates
          and code are available at https://iitmnlp.github.io/EvalEval/
      - icon:
          color: ''
          style: float
          name: ''
        title: A Primer on Pretrained Multilingual Language Models
        link: 'https://arxiv.org/abs/2107.00676'
        comingSoon: false
        updated: false
        pointerDetail1: >-
          Sumanth Doddapaneni, Gowtham Ramesh, Mitesh M. Khapra, Anoop
          Kunchukuttan, Pratyush Kumar
        pointerDetail2: July 2021
        text: >-
          Multilingual Language Models (\MLLMs) such as mBERT, XLM, XLM-R,
          \textit{etc.} have emerged as a viable option for bringing the power
          of pretraining to a large number of languages. Given their success in
          zero-shot transfer learning, there has emerged a large body of work in
          (i) building bigger \MLLMs~covering a large number of languages (ii)
          creating exhaustive benchmarks covering a wider variety of tasks and
          languages for evaluating \MLLMs~ (iii) analysing the performance of
          \MLLMs~on monolingual, zero-shot cross-lingual and bilingual tasks
          (iv) understanding the universal language patterns (if any) learnt by
          \MLLMs~ and (v) augmenting the (often) limited capacity of \MLLMs~ to
          improve their performance on seen or even unseen languages. In this
          survey, we review the existing literature covering the above broad
          areas of research pertaining to \MLLMs. Based on our survey, we
          recommend some promising directions of future research.
    _template: featuresAlt
  - quote: '2022'
    author: Phil Karlton
    color: default
    _template: testimonial
  - items:
      - icon:
          color: ''
          style: float
          name: ''
        title: >-
          Samanantar: The Largest Publicly Available Parallel Corpora Collection
          for 11 Indic Languages
        link: 'https://aclanthology.org/2022.tacl-1.9/'
        comingSoon: false
        updated: false
        pointerDetail1: >-
          Gowtham Ramesh, Sumanth Doddapaneni, Aravinth Bheemaraj, Mayank
          Jobanputra, Raghavan AK, Ajitesh Sharma, Sujit Sahoo, Harshita Diddee,
          Mahalakshmi J, Divyanshu Kakwani, Navneet Kumar, Aswin Pradeep,
          Srihari Nagaraj, Kumar Deepak, Vivek Raghavan, Anoop Kunchukuttan,
          Pratyush Kumar, Mitesh Shantadevi Khapra
        pointerDetail2: '2022'
        text: >-
          We present Samanantar, the largest publicly available parallel corpora
          collection for Indic languages. The collection contains a total of
          49.7 million sentence pairs between English and 11 Indic languages
          (from two language families). Specifically, we compile 12.4 million
          sentence pairs from existing, publicly available parallel corpora, and
          additionally mine 37.4 million sentence pairs from the Web, resulting
          in a 4× increase. We mine the parallel sentences from the Web by
          combining many corpora, tools, and methods: (a) Web-crawled
          monolingual corpora, (b) document OCR for extracting sentences from
          scanned documents, (c) multilingual representation models for aligning
          sentences, and (d) approximate nearest neighbor search for searching
          in a large collection of sentences. Human evaluation of samples from
          the newly mined corpora validate the high quality of the parallel
          sentences across 11 languages. Further, we extract 83.4 million
          sentence pairs between all 55 Indic language pairs from the
          English-centric parallel corpus using English as the pivot language.
          We trained multilingual NMT models spanning all these languages on
          Samanantar which outperform existing models and baselines on publicly
          available benchmarks, such as FLORES, establishing the utility of
          Samanantar. Our data and models are available publicly at Samanantar
          and we hope they will help advance research in NMT and multilingual
          NLP for Indic languages.
      - icon:
          color: ''
          style: float
          name: ''
        title: 'IndicBART: A Pre-trained Model for Indic Natural Language Generation'
        link: 'https://aclanthology.org/2022.findings-acl.145/'
        comingSoon: false
        updated: false
        pointerDetail1: >-
          Raj Dabre, Himani Shrotriya, Anoop Kunchukuttan, Ratish Puduppully,
          Mitesh Khapra, Pratyush Kumar
        pointerDetail2: May 2022
        text: >-
          In this paper, we study pre-trained sequence-to-sequence models for a
          group of related languages, with a focus on Indic languages. We
          present IndicBART, a multilingual, sequence-to-sequence pre-trained
          model focusing on 11 Indic languages and English. IndicBART utilizes
          the orthographic similarity between Indic scripts to improve transfer
          learning between similar Indic languages. We evaluate IndicBART on two
          NLG tasks: Neural Machine Translation (NMT) and extreme summarization.
          Our experiments on NMT and extreme summarization show that a model
          specific to related languages like IndicBART is competitive with large
          pre-trained models like mBART50 despite being significantly smaller.
          It also performs well on very low-resource translation scenarios where
          languages are not included in pre-training or fine-tuning. Script
          sharing, multilingual training, and better utilization of limited
          model capacity contribute to the good performance of the compact
          IndicBART model.
      - icon:
          color: ''
          style: float
          name: ''
        title: >-
          OpenHands: Making Sign Language Recognition Accessible with Pose-based
          Pretrained Models across Languages
        link: 'https://aclanthology.org/2022.acl-long.150/'
        comingSoon: false
        updated: false
        pointerDetail1: 'Prem Selvaraj, Gokul Nc, Pratyush Kumar, Mitesh Khapra'
        pointerDetail2: May 2022
        text: >-
          AI technologies for Natural Languages have made tremendous progress
          recently. However, commensurate progress has not been made on Sign
          Languages, in particular, in recognizing signs as individual words or
          as complete sentences. We introduce OpenHands, a library where we take
          four key ideas from the NLP community for low-resource languages and
          apply them to sign languages for word-level recognition. First, we
          propose using pose extracted through pretrained models as the standard
          modality of data in this work to reduce training time and enable
          efficient inference, and we release standardized pose datasets for
          different existing sign language datasets. Second, we train and
          release checkpoints of 4 pose-based isolated sign language recognition
          models across 6 languages (American, Argentinian, Chinese, Greek,
          Indian, and Turkish), providing baselines and ready checkpoints for
          deployment. Third, to address the lack of labelled data, we propose
          self-supervised pretraining on unlabelled data. We curate and release
          the largest pose-based pretraining dataset on Indian Sign Language
          (Indian-SL). Fourth, we compare different pretraining strategies and
          for the first time establish that pretraining is effective for sign
          language recognition by demonstrating (a) improved fine-tuning
          performance especially in low-resource settings, and (b) high
          crosslingual transfer from Indian-SL to few other sign languages. We
          open-source all models and datasets in OpenHands with a hope that it
          makes research in sign languages reproducible and more accessible.
      - icon:
          color: ''
          style: float
          name: ''
        title: >-
          Addressing Resource Scarcity across Sign Languages with Multilingual
          Pretraining and Unified-Vocabulary Datasets
        link: >-
          https://proceedings.neurips.cc/paper_files/paper/2022/hash/eb011fd258c763c44d8c6a0e9ce04f17-Abstract-Datasets_and_Benchmarks.html
        comingSoon: false
        updated: false
        pointerDetail1: >-
          Gokul NC, Manideep Ladi, Sumit Negi, Prem Selvaraj, Pratyush Kumar,
          Mitesh Khapra
        pointerDetail2: '2022'
        text: >-
          There are over 300 sign languages in the world, many of which have
          very limited or no labelled sign-to-text datasets. To address
          low-resource data scenarios, self-supervised pretraining and
          multilingual finetuning have been shown to be effective in natural
          language and speech processing. In this work, we apply these ideas to
          sign language recognition.We make three contributions.- First, we
          release SignCorpus, a large pretraining dataset on sign languages
          comprising about 4.6K hours of signing data across 10 sign languages.
          SignCorpus is curated from sign language videos on the internet,
          filtered for data quality, and converted into sequences of pose
          keypoints thereby removing all personal identifiable information
          (PII).- Second, we release Sign2Vec, a graph-based model with 5.2M
          parameters that is pretrained on SignCorpus. We envisage Sign2Vec as a
          multilingual large-scale pretrained model which can be fine-tuned for
          various sign recognition tasks across languages.- Third, we create
          MultiSign-ISLR -- a multilingual and label-aligned dataset of
          sequences of pose keypoints from 11 labelled datasets across 7 sign
          languages, and MultiSign-FS -- a new finger-spelling training and test
          set across 7 languages. On these datasets, we fine-tune Sign2Vec to
          create multilingual isolated sign recognition models. With experiments
          on multiple benchmarks, we show that pretraining and multilingual
          transfer are effective giving significant gains over state-of-the-art
          results.All datasets, models, and code has been made open-source via
          the OpenHands toolkit.
      - icon:
          color: ''
          style: float
          name: ''
        title: Towards Building ASR Systems for the Next Billion Users
        link: 'https://ojs.aaai.org/index.php/AAAI/article/view/21327'
        comingSoon: false
        updated: false
        pointerDetail1: >-
          Tahir Javed, Sumanth Doddapaneni, Abhigyan Raman, Kaushal Santosh
          Bhogale, Gowtham Ramesh, Anoop Kunchukuttan, Pratyush Kumar, Mitesh M.
          Khapra
        pointerDetail2: June 2022
        text: >-
          Recent methods in speech and language technology pretrain very large
          models which are fine-tuned for specific tasks. However, the benefits
          of such large models are often limited to a few resource rich
          languages of the world. In this work, we make multiple contributions
          towards building ASR systems for low resource languages from the
          Indian subcontinent. First, we curate 17,000 hours of raw speech data
          for 40 Indian languages from a wide variety of domains including
          education, news, technology, and finance. Second, using this raw
          speech data we pretrain several variants of wav2vec style models for
          40 Indian languages. Third, we analyze the pretrained models to find
          key features: codebook vectors of similar sounding phonemes are shared
          across languages, representations across layers are discriminative of
          the language family, and attention heads often pay attention within
          small local windows. Fourth, we fine-tune this model for downstream
          ASR for 9 languages and obtain state-of-the-art results on 3 public
          datasets, including on very low-resource languages such as Sinhala and
          Nepali. Our work establishes that multilingual pretraining is an
          effective strategy for building ASR systems for the linguistically
          diverse speakers of the Indian subcontinent.
      - icon:
          color: ''
          style: float
          name: ''
        title: >-
          IndicNLG Benchmark: Multilingual Datasets for Diverse NLG Tasks in
          Indic Languages
        link: 'https://aclanthology.org/2022.emnlp-main.360/'
        comingSoon: false
        updated: false
        pointerDetail1: >-
          Aman Kumar, Himani Shrotriya, Prachi Sahu, Amogh Mishra, Raj Dabre,
          Ratish Puduppully, Anoop Kunchukuttan, Mitesh M. Khapra, Pratyush
          Kumar
        pointerDetail2: December 2022
        text: >-
          Natural Language Generation (NLG) for non-English languages is
          hampered by the scarcity of datasets in these languages. We present
          the IndicNLG Benchmark, a collection of datasets for benchmarking NLG
          for 11 Indic languages. We focus on five diverse tasks, namely,
          biography generation using Wikipedia infoboxes, news headline
          generation, sentence summarization, paraphrase generation and,
          question generation. We describe the created datasets and use them to
          benchmark the performance of several monolingual and multilingual
          baselines that leverage pre-trained sequence-to-sequence models. Our
          results exhibit the strong performance of multilingual
          language-specific pre-trained models, and the utility of models
          trained on our dataset for other related NLG tasks. Our dataset
          creation methods can be easily applied to modest-resource languages as
          they involve simple steps such as scraping news articles and Wikipedia
          infoboxes, light cleaning, and pivoting through machine translation
          data. To the best of our knowledge, the IndicNLG Benchmark is the
          first NLG benchmark for Indic languages and the most diverse
          multilingual NLG dataset, with approximately 8M examples across 5
          tasks and 11 languages. The datasets and models will be publicly
          available.
    _template: featuresAlt
---

