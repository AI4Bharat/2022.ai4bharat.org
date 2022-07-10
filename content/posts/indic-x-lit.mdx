---
title: IndicXlit
excerpt: ''
---

# ***IndicXlit***

[Website](https://indicnlp.ai4bharat.org/indic-xlit) | [Downloads](https://github.com/AI4Bharat/IndicXlit#download-indicxlit-model) | [Paper](https://arxiv.org/abs/2205.03018) | [Demo](https://xlit.ai4bharat.org/) | [Python Library](https://pypi.org/project/ai4bharat-transliteration)



[***IndicXlit***](https://indicnlp.ai4bharat.org/indic-xlit) is a transformer-based multilingual transliteration model (~11M) for roman to native script conversion that ***supports 21 Indic languages***. It is trained on [***Aksharantar***](https://indicnlp.ai4bharat.org/aksharantar/) dataset which is the ***largest publicly available parallel corpus containing 26 million word pairs spanning 20 Indic languages*** at the time of writing (5 May 2022). It supports following 21 Indic languages:

Assamese (asm)Bengali (ben)Bodo (brx)Gujarati (guj)Hindi (hin)Kannada (kan)Kashmiri (kas)Konkani (gom)Maithili (mai)Malayalam (mal)Manipuri (mni)Marathi (mar)Nepali (nep)Oriya (ori)Punjabi (pan)Sanskrit (san)Sindhi (snd)Sinhala (sin)Tamil (tam)Telugu (tel)Urdu (urd)

### Evaluation Results

IndicXlit is evaluated on [Dakshina benchmark](https://github.com/google-research-datasets/dakshina) and [Aksharantar benchmark](https://indicnlp.ai4bharat.org/aksharantar/). IndicXlit achieves state-of-theart results on the Dakshina testset and also provide baseline results on the new Aksharantar testset. The Top-1 results are summarized below. For more details, refer [paper](https://arxiv.org/abs/2205.03018)

**languagesasmbenbrxgujhinkankaskokmaimalmnimarneporipansantamtelurd**Dakshina-55.49-62.0260.5677.18---63.56-64.85--47.24-68.1073.3842.12Aksharantar (native words)60.2761.7070.7961.8955.5976.1828.7663.0672.0664.7383.1963.7280.2558.9040.2778.6369.7884.6948.37Aksharantar (named entities)38.6237.1230.3248.8958.8749.9220.2334.3642.8233.9344.1253.5752.6730.6336.0824.0642.1251.8247.77

## Table of contents

*   [Table of contents](https://github.com/AI4Bharat/IndicXlit#table-of-contents)
*   [Resources](https://github.com/AI4Bharat/IndicXlit#resources)
    *   [Download IndicXlit model](https://github.com/AI4Bharat/IndicXlit#download-indicxlit-model)
    *   [Using hosted APIs](https://github.com/AI4Bharat/IndicXlit#using-hosted-apis)
    *   [Accessing on ULCA](https://github.com/AI4Bharat/IndicXlit#accessing-on-ulca)
*   [Running Inference](https://github.com/AI4Bharat/IndicXlit#running-inference)
    *   [Command line interface](https://github.com/AI4Bharat/IndicXlit#command-line-interface)
    *   [Python Inference](https://github.com/AI4Bharat/IndicXlit#python-inference)
*   [Training model](https://github.com/AI4Bharat/IndicXlit#training-model)
    *   [Setting up your environment](https://github.com/AI4Bharat/IndicXlit#setting-up-your-environment)
    *   [Details of models and hyperparameters](https://github.com/AI4Bharat/IndicXlit#details-of-models-and-hyperparameters)
    *   [Training procedure and code](https://github.com/AI4Bharat/IndicXlit#training-procedure-and-code)
    *   [WandB plots](https://github.com/AI4Bharat/IndicXlit#wandb-plots)
    *   [Evaluating trained model](https://github.com/AI4Bharat/IndicXlit#evaluating-trained-model)
    *   [Detailed benchmarking results](https://github.com/AI4Bharat/IndicXlit#detailed-benchmarking-results)
*   [Finetuning model on your data](https://github.com/AI4Bharat/IndicXlit#finetuning-model-on-your-data)
*   [Mining details](https://github.com/AI4Bharat/IndicXlit#mining-details)
*   [Directory structure](https://github.com/AI4Bharat/IndicXlit#directory-structure)
*   [Citing](https://github.com/AI4Bharat/IndicXlit#citing)
    *   [License](https://github.com/AI4Bharat/IndicXlit#license)
    *   [Contributors](https://github.com/AI4Bharat/IndicXlit#contributors)
    *   [Contact](https://github.com/AI4Bharat/IndicXlit#contact)

## Resources

### Download IndicXlit model

Roman to Indic model [v1.0](https://storage.googleapis.com/indic-xlit-public/final\_model/indicxlit-en-indic-v1.0.zip)

### Using hosted APIs

Click to expand

### Accessing on ULCA

You can try out our model at [ULCA](https://bhashini.gov.in/ulca/model/explore-models) and filter for IndicXlit model.

## Running Inference

### Command line interface

The model is trained on words as inputs. hence, users need to split sentence into words before running the transliteratation model when using our command line interface.

Follow the Colab notebook to setup the environment, download the trained *IndicXlit* model and transliterate your own text. GPU support is given in command line interface.

Command line interface --> 

### Python Inference

Python interface --> 

The python interface is useful in case you want to reuse the model for multiple translations and do not want to reinitialize the model each time. Moreover, re-ranking option is available in python interface, but not in command line interface.

## Training model

### Setting up your environment

Click to expand

## Details of models and hyperparameters

*   Architecture: IndicXlit uses 6 encoder and decoder layers, input embeddings of size 256 with 4 attention heads and feedforward dimension of 1024 with total number of parameters of 11M
*   Loss: Cross entropy loss
*   Optimizer: Adam
*   Adam-betas: (0.9, 0.98)
*   Peak-learning-rate: 0.001
*   Learning-rate-scheduler: inverse-sqrt
*   Temperature-sampling (T): 1.5
*   Warmup-steps: 4000

Please refer to section 6 of our [paper](https://arxiv.org/abs/2205.03018) for more details on training setup.

### Training procedure and code

The high level steps we follow for training are as follows:

Organize the train/test/valid data in corpus dir such that it has all the files containing parallel data for en-X lang pair in the following format

train\_x.en for training file of en-X lang pair which contains the space separated roman characters in each line

train\_x.x for training file of en-X lang pair which contains the space separated Indic characters in each line

```
# corpus/
# ├── train_as.as
# ├── train_en.en
# ├── train_bn.bn
# ├── train_en.en
# ├── ....
# ├── valid_as.as
# ├── valid_en.en
# ├── valid_bn.bn
# ├── valid_en.en
# ├── ....
# ├── test_as.as
# ├── test_en.en
# ├── test_bn.bn
# ├── test_en.en
# └── ....

```

Joint the training files across all languages

```
# corpus/
# ├── train_combine.cmb
# └── train_combine.en
```

Create the joint vocabulary using all the combined training data.

```
fairseq-preprocess \
   --trainpref corpus/train_combine  \
   --source-lang en --target-lang cmb \
   --workers 256 \
   --destdir corpus-bin
```

Create the binarized data required for fairseq for each langauge separately using joint vocabulary

```
for lang_abr in bn gu hi kn ml mr pa sd si ta te ur
do
   fairseq-preprocess \
   --trainpref corpus/train_$lang_abr --validpref corpus/valid_$lang_abr --testpref corpus/test_$lang_abr \
   --srcdict corpus-bin/dict.en.txt \
   --tgtdict corpus-bin/dict.cmb.txt \
   --source-lang en --target-lang $lang_abr \
   --workers 32 \
   --destdir corpus-bin 
done
```

Add all languages codes to `lang_list.txt` file and save it in the same dir

Start training with fairseq-train command. Please refer to [fairseq documentaion](https://fairseq.readthedocs.io/en/latest/command\_line\_tools.html) to know more about each of these options

```
# training script
fairseq-train corpus-bin \
  --save-dir transformer \
  --arch transformer --layernorm-embedding \
  --task translation_multi_simple_epoch \
  --sampling-method "temperature" \
  --sampling-temperature 1.5 \
  --encoder-langtok "tgt" \
  --lang-dict lang_list.txt \
  --lang-pairs en-bn,en-gu,en-hi,en-kn,en-ml,en-mr,en-pa,en-sd,en-si,en-ta,en-te,en-ur  \
  --decoder-normalize-before --encoder-normalize-before \
  --activation-fn gelu --adam-betas "(0.9, 0.98)"  \
  --batch-size 1024 \
  --decoder-attention-heads 4 --decoder-embed-dim 256 --decoder-ffn-embed-dim 1024 --decoder-layers 6 \
  --dropout 0.5 \
  --encoder-attention-heads 4 --encoder-embed-dim 256 --encoder-ffn-embed-dim 1024 --encoder-layers 6 \
  --lr 0.001 --lr-scheduler inverse_sqrt \
  --max-epoch 51 \
  --optimizer adam  \
  --num-workers 32 \
  --warmup-init-lr 0 --warmup-updates 4000
```

The above steps are further documented in our colab notebook 

Please refer to section 6 of our [paper](https://arxiv.org/abs/2205.03018) for more details of our training hyperparameters.

### WandB plots

[IndicXlit en-indic model](https://wandb.ai/cs20s002/transliteration\_model/runs/3gdvqx6e?workspace=user-cs20s002)

### Evaluating trained model

The trained model will get saved in the transformer directory. It will have the following files:

```
# transformer/
# └── checkpoint_best.pt
```

To generate the outputs after training, use following generation script which will generate the predictions and save it in output dir.

```
for lang_abr in as bn brx gom gu hi kn ks mai ml mni mr ne or pa sa sd si ta te ur
do
source_lang=en
target_lang=$lang_abr
fairseq-generate corpus-bin \
  --path transformer/checkpoint_best.pt \
  --task translation_multi_simple_epoch \
  --gen-subset test \
  --beam 4 \
  --nbest 4 \
  --source-lang $source_lang \
  --target-lang $target_lang \
  --batch-size 4096 \
  --encoder-langtok "tgt" \
  --lang-dict lang_list.txt \
  --num-workers 64 \
  --lang-pairs en-as,en-bn,en-brx,en-gom,en-gu,en-hi,en-kn,en-ks,en-mai,en-ml,en-mni,en-mr,en-ne,en-or,en-pa,en-sa,en-sd,en-si,en-ta,en-te,en-ur  > output/${source_lang}_${target_lang}.txt
done
```

To test the models after training, use `generate_result_files.py` to convert the fairseq output file into xml files and `evaluate_result_with_rescore_option.py` to compute accuracies.

`evaluate_result_with_rescore_option.py` can be downloaded using following link,

```
wget https://storage.googleapis.com/indic-xlit-public/final_model/evaluate_result_with_rescore_option.py
```

The above evaluation steps and code for `generate_result_files.py` are further documented in the colab notebook 

### Detailed evaluation results

Refer to [Evaluation Results](https://github.com/AI4Bharat/IndicXlit#evaluation-results) for results of IndicXlit model on Dakshina and Aksharantar benchmarks. Please refer to section 7 of our [paper](https://arxiv.org/abs/2205.03018) for detailed discussion of the results

## Finetuning the model on your input dataset

The high level steps for finetuning on your own dataset are:

Organize the train/test/valid data in corpus dir such that it has all the files containing parallel data for en-X lang pair in the following format

train\_x.en for training file of en-X lang pair which contains the space separated roman characters in each line

train\_x.x for training file of en-X lang pair which contains the space separated Indic characters in each line

```
# corpus/
# ├── train_as.as
# ├── train_en.en
# ├── train_bn.bn
# ├── train_en.en
# ├── ....
# ├── valid_as.as
# ├── valid_en.en
# ├── valid_bn.bn
# ├── valid_en.en
# ├── ....
# ├── test_as.as
# ├── test_en.en
# ├── test_bn.bn
# ├── test_en.en
# └── ....

```

To download and decompress the model file and joint vocabulary files use following commmand,

```
# download the IndicXlit models
wget https://storage.googleapis.com/indic-xlit-public/final_model/indicxlit-en-indic-v1.0.zip
unzip indicxlit-en-indic-v1.0.zip
```

binarizing the files using the joint dictionaries

```
for lang_abr in bn gu hi kn ml mr pa sd si ta te ur
do
   fairseq-preprocess \
   --trainpref corpus/train_$lang_abr --validpref corpus/valid_$lang_abr --testpref corpus/test_$lang_abr \
   --srcdict corpus-bin/dict.en.txt \
   --tgtdict corpus-bin/dict.mlt.txt \
   --source-lang en --target-lang $lang_abr \
   --destdir corpus-bin 
done
```

Add all languages codes to `lang_list.txt` file and save it in the same dir

Please refer to fairseq documentaion to know more about each of these options ([https://fairseq.readthedocs.io/en/latest/command\_line\_tools.html](https://fairseq.readthedocs.io/en/latest/command\_line\_tools.html))

```
# We will use fairseq-train to finetune the model:
# some notable args:
# --lr                  -> learning rate. From our limited experiments, we find that lower learning rates like 3e-5 works best for finetuning.
# --restore-file        -> reload the pretrained checkpoint and start training from here (change this path for indic-en. Currently its is set to en-indic)
# --reset-*             -> reset and not use lr scheduler, dataloader, optimizer etc of the older checkpoint

fairseq-train corpus-bin \
    --save-dir transformer \
    --arch transformer --layernorm-embedding \
    --task translation_multi_simple_epoch \
    --sampling-method "temperature" \
    --sampling-temperature 1.5 \
    --encoder-langtok "tgt" \
    --lang-dict lang_list.txt \
    --lang-pairs en-bn,en-gu,en-hi,en-kn,en-ml,en-mr,en-pa,en-sd,en-si,en-ta,en-te,en-ur \
    --decoder-normalize-before --encoder-normalize-before \
    --activation-fn gelu --adam-betas "(0.9, 0.98)"  \
    --batch-size 1024 \
    --decoder-attention-heads 4 --decoder-embed-dim 256 --decoder-ffn-embed-dim 1024 --decoder-layers 6 \
    --dropout 0.5 \
    --encoder-attention-heads 4 --encoder-embed-dim 256 --encoder-ffn-embed-dim 1024 --encoder-layers 6 \
    --lr 0.001 --lr-scheduler inverse_sqrt \
    --max-epoch 51 \
    --optimizer adam  \
    --num-workers 32 \
    --warmup-init-lr 0 --warmup-updates 4000 \
    --keep-last-epochs 5 \
    --patience 5 \
    --restore-file transformer/indicxlit.pt \
    --reset-lr-scheduler \
    --reset-meters \
    --reset-dataloader \
    --reset-optimizer
```

The above steps (setup the environment, download the trained *IndicXlit* model and prepare your custom dataset for funetuning) are further documented in our colab notebook 

## Mining details

Following links provides the detail description of mining from various resources,

*   Samanantar: [https://github.com/AI4Bharat/IndicXlit/tree/master/data\_mining/transliteration\_mining\_samanantar](https://github.com/AI4Bharat/IndicXlit/tree/master/data\_mining/transliteration\_mining\_samanantar)
*   IndicCorp: [https://github.com/AI4Bharat/IndicXlit/tree/master/data\_mining/IndicCorp/skeleton/en\_dict\_workplace](https://github.com/AI4Bharat/IndicXlit/tree/master/data\_mining/IndicCorp/skeleton/en\_dict\_workplace)

## Directory structure

```
IndicXlit
├── Checker
│   ├── README.md
│   ├── Transliteration_Checker.java
│   └── Transliteration_Checker.py
├── Dataset_Format
│   ├── Create_Aksharantar_JSONL.py
│   └── README.md
├── LICENSE
├── README.md
├── ULCA_Format
│   ├── README.md
│   └── ULCA_dataset.py
├── ablation_study
│   ├── data_filteration
│   │   ├── data_filteration_with_benchmark_test_dakshina_test_valid
│   │   └── data_filteration_with_dakshina_test_valid
│   └── model
│       ├── monolingual_model
│       ├── multilingual_model_(same for_singlescript_model)
│       ├── north_model
│       ├── preprocessing_for_rescoring
│       ├── south_model
│       └── specific_to_E_because_(differ_across_dataset_E_has_specific_langs)
├── app
│   ├── Caddyfile
│   ├── Hosting.md
│   ├── MANIFEST.in
│   ├── README.md
│   ├── ai4bharat
│   │   ├── __init__.py
│   │   └── transliteration
│   ├── api_expose.py
│   ├── auto_certif_renew.py
│   ├── dependencies.txt
│   ├── setup.py
│   └── start_server.py
├── corpus_preprocessing
│   ├── Analysis
│   │   ├── GIT_analysis.py
│   │   ├── README.md
│   │   └── len_stats.py
│   ├── Benchmark_data_from_JSONS(Karya)
│   │   ├── Benchmark_Named_entities.py
│   │   ├── Benchmark_Transliteration_data.py
│   │   └── README.md
│   ├── Collating_existing_dataset
│   │   ├── collate_data.ipynb
│   │   ├── dataset_info.csv
│   │   └── stats_detail.txt
│   ├── Create_Unique_list_from_datasets
│   │   ├── IndicCorp
│   │   ├── LDCIL
│   │   ├── README.md
│   │   └── Words_freq_probability_after_kenlm
│   └── Pre_process_arabic_scripts
│       ├── README.md
│       └── clean_urdu.py
├── data_mining
│   ├── IndicCorp
│   │   ├── preprocess_data
│   │   └── skeleton
│   ├── readme.md
│   └── transliteration_mining_samanantar
│       ├── align_data.sh
│       ├── convert_csv.py
│       ├── extract_translit_pairs.sh
│       ├── install_tools.txt
│       ├── model_run_steps.txt
│       ├── preprocess_data.py
│       ├── readme.md
│       ├── samanantar_pairs_count.xlsx
│       └── validation_script.py
├── inference
│   ├── cli
│   │   ├── generate_result_files.py
│   │   ├── interactive.sh
│   │   ├── lang_list.txt
│   │   └── transliterate_word.sh
│   └── python
│       ├── custom_interactive.py
│       ├── lang_list.txt
│       ├── test_api_inference.py
│       └── xlit_translit.py
├── model_training_scripts
│   ├── README.md
│   ├── binarizing
│   │   └── preprocess_all_lang.sh
│   ├── data_filtration
│   │   ├── combining_data_acrooss_lang.py
│   │   ├── refresh_data_train_all_test_valid.py
│   │   └── refresh_test_valid_data.py
│   ├── evaluate
│   │   ├── evaluate_result_with_rescore_option.py
│   │   ├── final_result.sh
│   │   └── final_result_without_rescoring.sh
│   ├── generation
│   │   ├── generate.sh
│   │   └── generate_result_files.py
│   ├── skeleton
│   │   ├── blank_file.txt
│   │   ├── creating_dir_struct.sh
│   │   ├── indiccorp
│   │   ├── mined_data
│   │   ├── multi_lang
│   │   ├── preprocess_data
│   │   └── working
│   ├── training
│   │   ├── lang_list.txt
│   │   └── train.sh
│   └── vocab_creation
│       └── preprocess.sh
└── sample_images
    ├── main_page.png
    ├── select_language.png
    └── transliterate_sentence.png

```

## Citing

If you are using any of the resources, please cite the following article:

```
@article{Madhani2022AksharantarTB,
  title={Aksharantar: Towards building open transliteration tools for the next billion users},
  author={Yash Madhani and Sushane Parthan and Priyanka A. Bedekar and Ruchi Khapra and Vivek Seshadri and Anoop Kunchukuttan and Pratyush Kumar and Mitesh M. Khapra},
  journal={ArXiv},
  year={2022},
  volume={abs/2205.03018}
}

```

We would like to hear from you if:

*   You are using our resources. Please let us know how you are putting these resources to use.
*   You have any feedback on these resources.

### License

The IndicXlit code (and models) are released under the MIT License.

### Contributors

*   Yash Madhani ([AI4Bharat](https://ai4bharat.org/), [IITM](https://www.iitm.ac.in/))
*   Sushane Parthan ([AI4Bharat](https://ai4bharat.org/), [IITM](https://www.iitm.ac.in/))
*   Priyanka Bedakar ([AI4Bharat](https://ai4bharat.org/), [IITM](https://www.iitm.ac.in/))
*   Ruchi Khapra ([AI4Bharat](https://ai4bharat.org/))
*   Gokul NC ([AI4Bharat](https://ai4bharat.org/))
*   Anoop Kunchukuttan ([AI4Bharat](https://ai4bharat.org/), [Microsoft](https://www.microsoft.com/en-in/))
*   Pratyush Kumar ([AI4Bharat](https://ai4bharat.org/), [Microsoft](https://www.microsoft.com/en-in/), [IITM](https://www.iitm.ac.in/))
*   Mitesh M. Khapra ([AI4Bharat](https://ai4bharat.org/), [IITM](https://www.iitm.ac.in/))

### Contact

*   Anoop Kunchukuttan ([anoop.kunchukuttan@gmail.com](mailto:anoop.kunchukuttan@gmail.com))
*   Mitesh Khapra ([miteshk@cse.iitm.ac.in](mailto:miteshk@cse.iitm.ac.in))
*   Pratyush Kumar ([pratyush@cse.iitm.ac.in](mailto:pratyush@cse.iitm.ac.in))

## Acknowledgements

We would like to thank EkStep Foundation for their generous grant which helped in setting up the Centre for AI4Bharat at IIT Madras to support our students, research staff, data and computational requirements. We would like to thank The Ministry of Electronics and Information Technology (NLTM) for its grant to support the creation of datasets and models for Indian languages under its ambitions Bhashini project. We would also like to thank the Centre for Development of Advanced Computing, India (C-DAC) for providing access to the Param Siddhi supercomputer for training our models. Lastly, we would like to thank Microsoft for its grant to create datasets, tools and resources for Indian languages.



