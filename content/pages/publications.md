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
      - icon:
          color: ''
          style: float
          name: ''
        title: >-
          SuperShaper: Task-Agnostic Super Pre-training of BERT Models with
          Variable Hidden Dimensions
        link: 'https://arxiv.org/abs/2110.04711'
        comingSoon: false
        updated: false
        pointerDetail1: 'Vinod Ganesan, Gowtham Ramesh, Pratyush Kumar'
        pointerDetail2: October 2021
        text: >-
          Task-agnostic pre-training followed by task-specific fine-tuning is a
          default approach to train NLU models. Such models need to be deployed
          on devices across the cloud and the edge with varying resource and
          accuracy constraints. For a given task, repeating pre-training and
          fine-tuning across tens of devices is prohibitively expensive. We
          propose SuperShaper, a task agnostic pre-training approach which
          simultaneously pre-trains a large number of Transformer models by
          varying shapes, i.e., by varying the hidden dimensions across layers.
          This is enabled by a backbone network with linear bottleneck matrices
          around each Transformer layer which are sliced to generate differently
          shaped sub-networks. In spite of its simple design space and efficient
          implementation, SuperShaper discovers networks that effectively
          trade-off accuracy and model size: Discovered networks are more
          accurate than a range of hand-crafted and automatically searched
          networks on GLUE benchmarks. Further, we find two critical advantages
          of shape as a design variable for Neural Architecture Search (NAS):
          (a) heuristics of good shapes can be derived and networks found with
          these heuristics match and even improve on carefully searched networks
          across a range of parameter counts, and (b) the latency of networks
          across multiple CPUs and GPUs are insensitive to the shape and thus
          enable device-agnostic search. In summary, SuperShaper radically
          simplifies NAS for language models and discovers networks that
          generalize across tasks, parameter constraints, and devices.
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
          Aksharantar: Towards building open transliteration tools for the next
          billion users
        link: 'https://arxiv.org/abs/2205.03018'
        comingSoon: false
        updated: false
        pointerDetail1: >-
          Yash Madhani, Sushane Parthan, Priyanka Bedekar, Ruchi Khapra, Vivek
          Seshadri, Anoop Kunchukuttan, Pratyush Kumar, Mitesh M. Khapra
        pointerDetail2: May 2022
        text: >-
          We introduce Aksharantar, the largest publicly available
          transliteration dataset for 21 Indic languages containing 26 million
          transliteration pairs. We build this dataset by mining transliteration
          pairs from large monolingual and parallel corpora, as well as
          collecting transliterations from human annotators to ensure diversity
          of words and representation of low-resource languages. We introduce a
          new, large, diverse testset for Indic language transliteration
          containing 103k words pairs spanning 19 languages that enables
          fine-grained analysis of transliteration models.

          We train the IndicXlit model on the Aksharantar training set.
          IndicXlit is a single transformer-based multilingual transliteration
          model for roman to Indic script conversion supporting 21 Indic
          languages. It achieves state-of-the art results on the Dakshina
          testset, and establishes strong baselines on the Aksharantar testset
          released along with this work.

          All the datasets and models are publicly available at this https URL.
          We hope the availability of these large-scale, open resources will
          spur innovation for Indic language transliteration and downstream
          applications.
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
          Effectiveness of Mining Audio and Text Pairs from Public Data for
          Improving ASR Systems for Low-Resource Languages
        link: 'https://arxiv.org/abs/2208.12666'
        comingSoon: false
        updated: false
        pointerDetail1: >-
          Kaushal Santosh Bhogale, Abhigyan Raman, Tahir Javed, Sumanth
          Doddapaneni, Anoop Kunchukuttan, Pratyush Kumar, Mitesh M. Khapra
        pointerDetail2: August 2022
        text: >-
          End-to-end (E2E) models have become the default choice for
          state-of-the-art speech recognition systems. Such models are trained
          on large amounts of labelled data, which are often not available for
          low-resource languages. Techniques such as self-supervised learning
          and transfer learning hold promise, but have not yet been effective in
          training accurate models. On the other hand, collecting labelled
          datasets on a diverse set of domains and speakers is very expensive.
          In this work, we demonstrate an inexpensive and effective alternative
          to these approaches by ``mining'' text and audio pairs for Indian
          languages from public sources, specifically from the public archives
          of All India Radio. As a key component, we adapt the Needleman-Wunsch
          algorithm to align sentences with corresponding audio segments given a
          long audio and a PDF of its transcript, while being robust to errors
          due to OCR, extraneous text, and non-transcribed speech. We thus
          create Shrutilipi, a dataset which contains over 6,400 hours of
          labelled audio across 12 Indian languages totalling to 4.95M
          sentences. On average, Shrutilipi results in a 2.3x increase over
          publicly available labelled data. We establish the quality of
          Shrutilipi with 21 human evaluators across the 12 languages. We also
          establish the diversity of Shrutilipi in terms of represented regions,
          speakers, and mentioned named entities. Significantly, we show that
          adding Shrutilipi to the training set of Wav2Vec models leads to an
          average decrease in WER of 5.8\% for 7 languages on the IndicSUPERB
          benchmark. For Hindi, which has the most benchmarks (7), the average
          WER falls from 18.8% to 13.5%. This improvement extends to efficient
          models: We show a 2.3% drop in WER for a Conformer model (10x smaller
          than Wav2Vec). Finally, we demonstrate the diversity of Shrutilipi by
          showing that the model trained with it is more robust to noisy input.
      - icon:
          color: ''
          style: float
          name: ''
        title: >-
          IndicSUPERB: A Speech Processing Universal Performance Benchmark for
          Indian languages
        link: 'https://arxiv.org/abs/2208.11761'
        comingSoon: false
        updated: false
        pointerDetail1: >-
          Tahir Javed, Kaushal Santosh Bhogale, Abhigyan Raman, Anoop
          Kunchukuttan, Pratyush Kumar, Mitesh M. Khapra
        pointerDetail2: August 2022
        text: >-
          A cornerstone in AI research has been the creation and adoption of
          standardized training and test datasets to earmark the progress of
          state-of-the-art models. A particularly successful example is the GLUE
          dataset for training and evaluating Natural Language Understanding
          (NLU) models for English. The large body of research around
          self-supervised BERT-based language models revolved around performance
          improvements on NLU tasks in GLUE. To evaluate language models in
          other languages, several language-specific GLUE datasets were created.
          The area of speech language understanding (SLU) has followed a similar
          trajectory. The success of large self-supervised models such as
          wav2vec2 enable creation of speech models with relatively easy to
          access unlabelled data. These models can then be evaluated on SLU
          tasks, such as the SUPERB benchmark. In this work, we extend this to
          Indic languages by releasing the IndicSUPERB benchmark. Specifically,
          we make the following three contributions. (i) We collect Kathbath
          containing 1,684 hours of labelled speech data across 12 Indian
          languages from 1,218 contributors located in 203 districts in India.
          (ii) Using Kathbath, we create benchmarks across 6 speech tasks:
          Automatic Speech Recognition, Speaker Verification, Speaker
          Identification (mono/multi), Language Identification, Query By
          Example, and Keyword Spotting for 12 languages. (iii) On the released
          benchmarks, we train and evaluate different self-supervised models
          alongside a commonly used baseline FBANK. We show that
          language-specific fine-tuned models are more accurate than baseline on
          most of the tasks, including a large gap of 76\% for the Language
          Identification task. However, for speaker identification,
          self-supervised models trained on large datasets demonstrate an
          advantage. We hope IndicSUPERB contributes to the progress of
          developing speech language understanding models for Indian languages.
      - icon:
          color: ''
          style: float
          name: ''
        title: Towards Building Text-To-Speech Systems for the Next Billion Users
        link: 'https://arxiv.org/abs/2211.09536'
        comingSoon: false
        updated: false
        pointerDetail1: >-
          Gokul Karthik Kumar, Praveen S V, Pratyush Kumar, Mitesh M. Khapra,
          Karthik Nandakumar
        pointerDetail2: November 2022
        text: >-
          Deep learning based text-to-speech (TTS) systems have been evolving
          rapidly with advances in model architectures, training methodologies,
          and generalization across speakers and languages. However, these
          advances have not been thoroughly investigated for Indian language
          speech synthesis. Such investigation is computationally expensive
          given the number and diversity of Indian languages, relatively lower
          resource availability, and the diverse set of advances in neural TTS
          that remain untested. In this paper, we evaluate the choice of
          acoustic models, vocoders, supplementary loss functions, training
          schedules, and speaker and language diversity for Dravidian and
          Indo-Aryan languages. Based on this, we identify monolingual models
          with FastPitch and HiFi-GAN V1, trained jointly on male and female
          speakers to perform the best. With this setup, we train and evaluate
          TTS models for 13 languages and find our models to significantly
          improve upon existing models in all languages as measured by mean
          opinion scores. We open-source all models on the Bhashini platform.
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
      - icon:
          color: ''
          style: float
          name: ''
        title: >-
          IndicMT Eval: A Dataset to Meta-Evaluate Machine Translation metrics
          for Indian Languages
        link: 'https://arxiv.org/abs/2212.10180'
        comingSoon: false
        updated: false
        pointerDetail1: >-
          Ananya B. Sai, Vignesh Nagarajan, Tanay Dixit, Raj Dabre, Anoop
          Kunchukuttan, Pratyush Kumar, Mitesh M. Khapra
        pointerDetail2: December 2022
        text: >-
          The rapid growth of machine translation (MT) systems has necessitated
          comprehensive studies to meta-evaluate evaluation metrics being used,
          which enables a better selection of metrics that best reflect MT
          quality. Unfortunately, most of the research focuses on high-resource
          languages, mainly English, the observations for which may not always
          apply to other languages. Indian languages, having over a billion
          speakers, are linguistically different from English, and to date,
          there has not been a systematic study of evaluating MT systems from
          English into Indian languages. In this paper, we fill this gap by
          creating an MQM dataset consisting of 7000 fine-grained annotations,
          spanning 5 Indian languages and 7 MT systems, and use it to establish
          correlations between annotator scores and scores obtained using
          existing automatic metrics. Our results show that pre-trained metrics,
          such as COMET, have the highest correlations with annotator scores.
          Additionally, we find that the metrics do not adequately capture
          fluency-based errors in Indian languages, and there is a need to
          develop metrics focused on Indian languages. We hope that our dataset
          and analysis will help promote further research in this area.
      - icon:
          color: ''
          style: float
          name: ''
        title: >-
          Naamapadam: A Large-Scale Named Entity Annotated Data for Indic
          Languages
        link: 'https://arxiv.org/abs/2212.10168'
        comingSoon: false
        updated: false
        pointerDetail1: >-
          Arnav Mhaske, Harshit Kedia, Sumanth Doddapaneni, Mitesh M. Khapra,
          Pratyush Kumar, Rudra Murthy V, Anoop Kunchukuttan
        pointerDetail2: December 2022
        text: >-
          We present, Naamapadam, the largest publicly available Named Entity
          Recognition (NER) dataset for the 11 major Indian languages from two
          language families. In each language, it contains more than 400k
          sentences annotated with a total of at least 100k entities from three
          standard entity categories (Person, Location and Organization) for 9
          out of the 11 languages. The training dataset has been automatically
          created from the Samanantar parallel corpus by projecting
          automatically tagged entities from an English sentence to the
          corresponding Indian language sentence. We also create manually
          annotated testsets for 8 languages containing approximately 1000
          sentences per language. We demonstrate the utility of the obtained
          dataset on existing testsets and the Naamapadam-test data for 8 Indic
          languages. We also release IndicNER, a multilingual mBERT model
          fine-tuned on the Naamapadam training set. IndicNER achieves the best
          F1 on the Naamapadam-test set compared to an mBERT model fine-tuned on
          existing datasets. IndicNER achieves an F1 score of more than 80 for 7
          out of 11 Indic languages. 
      - icon:
          color: ''
          style: float
          name: ''
        title: >-
          Towards Leaving No Indic Language Behind: Building Monolingual
          Corpora, Benchmark and Models for Indic Languages
        link: 'https://arxiv.org/abs/2212.05409'
        comingSoon: false
        updated: false
        pointerDetail1: >-
          Sumanth Doddapaneni, Rahul Aralikatte, Gowtham Ramesh, Shreya Goyal,
          Mitesh M. Khapra, Anoop Kunchukuttan, Pratyush Kumar
        pointerDetail2: December 2022
        text: >-
          Building Natural Language Understanding (NLU) capabilities for Indic
          languages, which have a collective speaker base of more than one
          billion speakers is absolutely crucial. In this work, we aim to
          improve the NLU capabilities of Indic languages by making
          contributions along 3 important axes (i) monolingual corpora (ii) NLU
          testsets (iii) multilingual LLMs focusing on Indic languages.
          Specifically, we curate the largest monolingual corpora, IndicCorp,
          with 20.9B tokens covering 24 languages from 4 language families - a
          2.3x increase over prior work, while supporting 12 additional
          languages. Next, we create a human-supervised benchmark, IndicXTREME,
          consisting of nine diverse NLU tasks covering 20 languages. Across
          languages and tasks, IndicXTREME contains a total of 105 evaluation
          sets, of which 52 are new contributions to the literature. To the best
          of our knowledge, this is the first effort towards creating a standard
          benchmark for Indic languages that aims to test the multilingual
          zero-shot capabilities of pretrained language models. Finally, we
          train IndicBERT v2, a state-of-the-art model supporting all the
          languages. Averaged across languages and tasks, the model achieves an
          absolute improvement of 2 points over a strong baseline.
    _template: featuresAlt
---

