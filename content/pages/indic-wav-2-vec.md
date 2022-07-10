---
title: IndicWav2Vec
excerpt: ''
---

# IndicWav2Vec

IndicWav2Vec is a multilingual speech model pretrained on 40 Indian langauges. This model represents the largest diversity of Indian languages in the pool of multilingual speech models. We fine-tune this model for downstream ASR for 9 languages and obtain state-of-the-art results on 3 public benchmarks, namely MUCS, MSR and OpenSLR.

As part of IndicWav2Vec we create largest publicly available corpora for 40 languages from 4 different language families. We also trained state-of-the-art ASR models for 9 Indian languages.

## Benchmarks

We evaluate our models on 3 publicly available benchmarks MUCS, MSR and OpenSLR and below mentioned are our results

**Modelgutateguhimrortatebnnesi**IndicW2V20.522.122.926.216.019.325.627.329.316.611.924.8IndicW2V + LM11.713.611.017.214.713.817.225.020.513.613.6-

## Updates

21 June 2022

```
Added more documentation

```

## Table of contents

*   [IndicWav2Vec](https://github.com/AI4Bharat/IndicWav2Vec#indicwav2vec)
    *   [Benchmarks](https://github.com/AI4Bharat/IndicWav2Vec#benchmarks)
    *   [Updates](https://github.com/AI4Bharat/IndicWav2Vec#updates)
    *   [Table of contents](https://github.com/AI4Bharat/IndicWav2Vec#table-of-contents)
    *   [Resources](https://github.com/AI4Bharat/IndicWav2Vec#resources)
        *   [Download Models](https://github.com/AI4Bharat/IndicWav2Vec#download-models)
        *   [Hosted API Usage](https://github.com/AI4Bharat/IndicWav2Vec#hosted-api-usage)
        *   [Accessing on ULCA](https://github.com/AI4Bharat/IndicWav2Vec#accessing-on-ulca)
    *   [Quick start](https://github.com/AI4Bharat/IndicWav2Vec#quick-start)
        *   [Python Inference](https://github.com/AI4Bharat/IndicWav2Vec#python-inference)
        *   [Huggingface Inference](https://github.com/AI4Bharat/IndicWav2Vec#huggingface-inference)
    *   [Tutorials](https://github.com/AI4Bharat/IndicWav2Vec#tutorials)
        *   [Setting up your environment](https://github.com/AI4Bharat/IndicWav2Vec#setting-up-your-environment)
        *   [Pretraining](https://github.com/AI4Bharat/IndicWav2Vec#pretraining)
            *   [Data preparation](https://github.com/AI4Bharat/IndicWav2Vec#data-preparation)
            *   [Manifest Creation](https://github.com/AI4Bharat/IndicWav2Vec#manifest-creation)
        *   [Training procedure and code](https://github.com/AI4Bharat/IndicWav2Vec#training-procedure-and-code)
        *   [Finetuning](https://github.com/AI4Bharat/IndicWav2Vec#finetuning)
            *   [Data preparation](https://github.com/AI4Bharat/IndicWav2Vec#data-preparation-1)
            *   [Finetuning procedure and code](https://github.com/AI4Bharat/IndicWav2Vec#finetuning-procedure-and-code)
            *   [Finetuning procedure and code](https://github.com/AI4Bharat/IndicWav2Vec#finetuning-procedure-and-code-1)
        *   [Language Modelling (LM)](https://github.com/AI4Bharat/IndicWav2Vec#language-modelling-lm)
            *   [Data preparation](https://github.com/AI4Bharat/IndicWav2Vec#data-preparation-2)
            *   [Training details](https://github.com/AI4Bharat/IndicWav2Vec#training-details)
        *   [Evaluating ASR models](https://github.com/AI4Bharat/IndicWav2Vec#evaluating-asr-models)
        *   [Model exporting](https://github.com/AI4Bharat/IndicWav2Vec#model-exporting)
        *   [Deployment](https://github.com/AI4Bharat/IndicWav2Vec#deployment)
    *   [Cite](https://github.com/AI4Bharat/IndicWav2Vec#cite)
    *   [License](https://github.com/AI4Bharat/IndicWav2Vec#license)
    *   [Contributors](https://github.com/AI4Bharat/IndicWav2Vec#contributors)
    *   [Contact](https://github.com/AI4Bharat/IndicWav2Vec#contact)

## Resources

### Download Models

Finetuned Models

**LanguageAcoustic ModelDictionaryLanguage ModelLexiconWandb**Bengali[fairseq](https://storage.googleapis.com/indicwav2vec-public/fine-tuning-ckpts/bengali\_large.pt) | [\[hf\]](https://github.com/AI4Bharat/IndicWav2Vec/blob/main)[link](https://github.com/AI4Bharat/IndicWav2Vec/blob/main)[KenLM](https://storage.googleapis.com/indicwav2vec-public/language-models/bengali.zip)[link](https://storage.googleapis.com/indicwav2vec-public/language-models/bengali.zip)[link](https://github.com/AI4Bharat/IndicWav2Vec/blob/main)Gujarati[fairseq](https://storage.googleapis.com/indicwav2vec-public/fine-tuning-ckpts/gujarati\_large.pt) / [hf](https://github.com/AI4Bharat/IndicWav2Vec/blob/main)[link](https://github.com/AI4Bharat/IndicWav2Vec/blob/main)[KenLM](https://storage.googleapis.com/indicwav2vec-public/language-models/guharati.zip)[link](https://storage.googleapis.com/indicwav2vec-public/language-models/guharati.zip)[link](https://github.com/AI4Bharat/IndicWav2Vec/blob/main)Hindi[fairseq](https://storage.googleapis.com/indicwav2vec-public/fine-tuning-ckpts/hindi\_large.pt) / [hf](https://github.com/AI4Bharat/IndicWav2Vec/blob/main)[link](https://github.com/AI4Bharat/IndicWav2Vec/blob/main)[KenLM](https://storage.googleapis.com/indicwav2vec-public/language-models/hindi.zip)[link](https://storage.googleapis.com/indicwav2vec-public/language-models/hindi.zip)[link](https://github.com/AI4Bharat/IndicWav2Vec/blob/main)Marathi[fairseq](https://storage.googleapis.com/indicwav2vec-public/fine-tuning-ckpts/marathi\_large.pt) / [hf](https://github.com/AI4Bharat/IndicWav2Vec/blob/main)[link](https://github.com/AI4Bharat/IndicWav2Vec/blob/main)[KenLM](https://storage.googleapis.com/indicwav2vec-public/language-models/marathi.zip)[link](https://storage.googleapis.com/indicwav2vec-public/language-models/marathi.zip)[link](https://github.com/AI4Bharat/IndicWav2Vec/blob/main)Nepali[fairseq](https://storage.googleapis.com/indicwav2vec-public/fine-tuning-ckpts/nepali\_large.pt) / [hf](https://github.com/AI4Bharat/IndicWav2Vec/blob/main)[link](https://github.com/AI4Bharat/IndicWav2Vec/blob/main)[KenLM](https://storage.googleapis.com/indicwav2vec-public/language-models/nepali.zip)[link](https://storage.googleapis.com/indicwav2vec-public/language-models/nepali.zip)[link](https://github.com/AI4Bharat/IndicWav2Vec/blob/main)Odia[fairseq](https://storage.googleapis.com/indicwav2vec-public/fine-tuning-ckpts/bengali\_large.pt) / [hf](https://github.com/AI4Bharat/IndicWav2Vec/blob/main)[link](https://github.com/AI4Bharat/IndicWav2Vec/blob/main)[KenLM](https://github.com/AI4Bharat/IndicWav2Vec/blob/main)[link](https://github.com/AI4Bharat/IndicWav2Vec/blob/main)[link](https://github.com/AI4Bharat/IndicWav2Vec/blob/main)Tamil[fairseq](https://storage.googleapis.com/indicwav2vec-public/fine-tuning-ckpts/odia\_large.pt) / [hf](https://github.com/AI4Bharat/IndicWav2Vec/blob/main)[link](https://github.com/AI4Bharat/IndicWav2Vec/blob/main)[KenLM](https://storage.googleapis.com/indicwav2vec-public/language-models/odia.zip)[link](https://storage.googleapis.com/indicwav2vec-public/language-models/odia.zip)[link](https://github.com/AI4Bharat/IndicWav2Vec/blob/main)Telugu[fairseq](https://storage.googleapis.com/indicwav2vec-public/fine-tuning-ckpts/telugu\_large.pt) / [hf](https://github.com/AI4Bharat/IndicWav2Vec/blob/main)[link](https://github.com/AI4Bharat/IndicWav2Vec/blob/main)[KenLM](https://storage.googleapis.com/indicwav2vec-public/language-models/telugu.zip)[link](https://storage.googleapis.com/indicwav2vec-public/language-models/telugu.zip)[link](https://github.com/AI4Bharat/IndicWav2Vec/blob/main)Sinhala[fairseq](https://storage.googleapis.com/indicwav2vec-public/fine-tuning-ckpts/sinhala\_large.pt) / [hf](https://github.com/AI4Bharat/IndicWav2Vec/blob/main)[link](https://github.com/AI4Bharat/IndicWav2Vec/blob/main)[KenLM](https://github.com/AI4Bharat/IndicWav2Vec/blob/main)[link](https://github.com/AI4Bharat/IndicWav2Vec/blob/main)[link](https://github.com/AI4Bharat/IndicWav2Vec/blob/main)

Pretrained Model(\*)

**NameModel Checkpoint**IndicWav2Vec Large[fairseq](https://storage.googleapis.com/indicwav2vec-public/pretraining-ckpts/indicwav2vec-large.pt)IndicWav2Vec Base[fairseq](https://storage.googleapis.com/indicwav2vec-public/pretraining-ckpts/indicwav2vec-base.pt)

(\* Trained on 40 Indian Languages, more details can be found [here](https://www.aaai.org/AAAI22Papers/AAAI-12428.JavedT.pdf))

### Hosted API Usage

Our models are hosted at the following API end points.

**LangugageLanguage CodeAPI End point**Bengalibn[https://34.65.180.101:5000/infer\_ulca\_bn](https://34.65.180.101:5000/infer\_ulca\_bn)Gujaratigu[https://34.65.180.101:5000/infer\_ulca\_gu](https://34.65.180.101:5000/infer\_ulca\_gu)Hindihi[https://216.48.182.174:4999/infer\_ulca\_hi](https://216.48.182.174:4999/infer\_ulca\_hi)Marathimr[https://34.65.180.101:5000/infer\_ulca\_mr](https://34.65.180.101:5000/infer\_ulca\_mr)Nepaline[https://34.65.180.101:5000/infer\_ulca\_ne](https://34.65.180.101:5000/infer\_ulca\_ne)Odiaor[https://34.65.180.101:5000/infer\_ulca\_or](https://34.65.180.101:5000/infer\_ulca\_or)Tamilta[https://34.65.180.101:5000/infer\_ulca\_ta](https://34.65.180.101:5000/infer\_ulca\_ta)Telugute[https://34.65.180.101:5000/infer\_ulca\_te](https://34.65.180.101:5000/infer\_ulca\_te)Sinhalasi[https://34.65.180.101:5000/infer\_ulca\_si](https://34.65.180.101:5000/infer\_ulca\_si)

Input API data format

```
{
    "config": {
        "language":{
          "sourceLanguage": "#Language Code"
        },
        "transcriptionFormat": {"value":"transcript"},
        "audioFormat": "wav"
    },
    "audio": [{
        "audioContent": "#BASE64 Encoded String"
    }]
}

OR

{
    "config": {
        "language":{
          "sourceLanguage": "#Language Code"
        },
        "transcriptionFormat": {"value":"transcript"},
        "audioFormat": "wav"
    },
    "audio": [{
        "audioUri": "#HTTP/GS path to file"
    }]
}


```

Output

```
{
    "output": [
        {
            "source": "सेकेंड स्टेप इस देसी है स्पेसिफाइड फॉरेस्ट राइट"
        }
    ],
    "status": "SUCCESS"
}

```

### Accessing on ULCA

Our models can be directly accessed on [ULCA](https://bhashini.gov.in/ulca/model/explore-models) by going into ASR section and filtering models by IndicWav2Vec.

## Quick start

### Python Inference

*   python sfi.py \[--audio-file AUDIO\_FILE\_PATH]           \[--ft-model FT\_MODEL]           \[--w2l-decoder viterbi]
*   python sfi.py \[--audio-file AUDIO\_FILE\_PATH]             \[--ft-model FT\_MODEL\_PATH]           \[--w2l-decoder kenlm]           \[--lexicon LEXICON\_PATH]           \[--kenlm-model KENLM\_MODEL\_PATH]          \[--beam-threshold BEAM\_THRESHOLD]           \[--beam-size-token BEAM\_SIZE\_TOKEN]           \[--beam BEAM\_SIZE]           \[--word-score WORD\_SCORE]           \[--lm-weight LM\_WEIGHT]          \[--unk-weight UNK\_WEIGHT]           \[--sil-weight SIL\_WEIGHT]           \[--nbest NBEST]

### Huggingface Inference

*   Coming soon

## Tutorials

### Setting up your environment

*   conda create -n \<env\_name>conda activate \<env\_name>
*   sudo apt-get install liblzma-dev libbz2-dev libzstd-dev libsndfile1-dev libopenblas-dev libfftw3-dev libgflags-dev libgoogle-glog-devsudo apt install build-essential cmake libboost-system-dev libboost-thread-dev libboost-program-options-dev libboost-test-dev libeigen3-dev zlib1g-dev libbz2-dev liblzma-dev ffmpeg pip install -r requirements.txt pip install packaging soundfile swifter editdistance omegaconf
*   git clone https://github.com/AI4Bharat/fairseq.gitcd fairseqpip install --editable ./#\[Optional for faster training]git clone https://github.com/NVIDIA/apexcd apexpip install -v --no-cache-dir --global-option="--cpp\_ext" --global-option="--cuda\_ext" \\--global-option="--deprecated\_fused\_adam" --global-option="--xentropy" \\--global-option="--fast\_multihead\_attn" ./cd ..
*   git clone https://github.com/kpu/kenlm.gitcd kenlmmkdir -p build && cd buildcmake .. make -j 16cd ..export KENLM\_ROOT=$PWDcd ..
*   git clone https://github.com/flashlight/flashlight.gitcd flashlight/bindings/pythonexport USE\_MKL=0python setup.py install

### Pretraining

#### Data preparation

*   bash dw\_util.sh \<path\_to\_urls> \<data\_store\_path> \<num\_of\_threads>The `<data_store_path>` refers to the location where the data will be downloaded. The `<num_of_threads>` can be used to control the parallelization.
*   python vad.py \<data\_read\_dir> \<data\_write\_dir> \<folder\_name>The `<data_read_dir>` is the root of downloaded files which contain downloaded data in language-named-folders.The `<data_write_dir>` is the location for saving the data after VAD step.The `<folder_name>` refers to the names of language-named-folder for which you want to perform this VAD step.\*The reason why folder\_name has been kept as a seperate entity is to allow parallelization because one can process multiple folders simultaneously.
*   python snr.py \<data\_path> \<folder/language\_name>where the `<data_path>` refers to the root path containing all the audios in language specific folders. Here it refers to the` <data_write_dir>` from the previous step. The `<folder/language_name>` refers to name of language\_specific folder for which snr\_filtering needs to be done. The audio data that is rejected is moved in the folder **"snr\_rejected"**, which is created automatically.
*   python chunking.py \<chunking\_path>All the audio files present in the `<chunking_path>` will be chunked and saved in the same location. The original files are **removed**.

Or alternatively users can use the one single script `process_data.sh` to run the entire pipeline

*   Usage: `bash process_data.sh </path/to/download> <num_of_threads>`
*   The `</path/to/download>` refers to the location where the data will be downloaded.
*   The `<num_of_threads>` can be used to control the parallelization.
*   Please make sure that the relative path is urls directory is `../urls` from the script.

#### Manifest Creation

For creating language-wise pretraining manifest

```
python path/to/lang_wise_manifest_creation.py /path/to/wave/files --dest /manifest/path --ext $ext --valid-percent $valid

```

For `/path/to/wav/files/` we expect the directory to have one folder per language under the parent directory

In our pretraing, we use a `--valid-percent` as `0.03`

For creating a combined validation file for all languages, we concatenate all individual `*_valid.tsv` files to create a valid.tsv file.

```
import pandas as pd
import glob

filenames = glob.glob("*_valid.tsv")

combined = []
for f in filename:
    df = pd.read_csv(f, skiprows=1, names=['f', 'd'], sep='\t')
    combined.append(df)

df_combined = pd.concat(combined, axis=0, ignore_index=True)
df_combined.to_csv('valid.tsv', index=True, header=False, sep='\t')

```

We then add the `/path/to/wav/files/` to the first line of the `valid.tsv` file

### Training procedure and code

For pretraining the model we do multi-node training and schedule the runs with slurm.

Following is the invocation script for training IndicWav2Vec base starting from Wav2Vec2.0 English base ckeckpoint

```
fairseq-hydra-train \
  task.data=/path/to/manifest/directory \
  common.wandb_project=<wandb project name> \
  task._name=temp_sampled_audio_pretraining \
  +task.sampling_alpha=0.7 \
  common.log_interval=200 \
  common.log_format=tqdm \
  dataset.max_tokens=3000000 \
  common.user_dir=/path/to/custom_task/directory \
  checkpoint.save_dir=/path/to/save/model/checkpoints \
  checkpoint.restore_file=/path/to wav2vec2-english-base/checkpoint.pt \
  +optimization.update_freq='[2]' \
  optimization.clip_norm=0.5 \
  checkpoint.reset_optimizer=true \
  distributed_training.distributed_world_size=<total GPUs> \
  distributed_training.distributed_port=$PORT \
  --config-dir /path/to/configs/directory \
  --config-name wav2vec2_base_librispeech"

```

For Large model we override the above configuration with

```
  checkpoint.restore_file=/path/to wav2vec2-english-large/checkpoint.pt \
  +optimization.update_freq='[6]' \
  lr_scheduler.warmup_updates=0 \
  --config-name wav2vec2_large_librivox"

```

Configs for both the models are provided in the configs directory

### Finetuning

#### Data preparation

*   For datasets, that are not sampled uniformly at 16kHz, the user may run the following command to normalize the data first.bash normalize\_sr.sh \<path/to/the/folder/to/normalize> \<ext|wav|mp3>
*   Manifest creation
    *   Make a new directory and name it (say `mucs`)
    *   Note that the transcript.txt contain entries of the following type\<filename1> \<transcript1> #just the filename and not the path\<filename2> \<transcript2>\<filename3> \<transcript3>\<filename4> \<transcript4>...Sample structure of folder tree:mucs(or msr/openslr)    ├── hindi    │   ├── test    │   │   ├── audio    │   │   └── transcript.txt    │   ├── train    │   │   ├── audio    │   │   └── transcript.txt    │   └── valid    │       ├── audio    │       └── transcript.txt    └── marathi        ├── test        │   ├── audio        │   └── transcript.txt        ├── train        │   ├── audio        │   └── transcript.txt        └── valid            ├── audio            └── transcript.txt        .        .        .        .
    *   bash m\_process.sh \<path/to/the/root/folder/(mucs)>The would result in creation of manifest folders in each language specific folder which can the be used with fairseq for finetuning.

#### Finetuning procedure and code

Following is the invocation script for finetuning IndicWav2Vec large on a particular language

```
fairseq-hydra-train \
  task.data=/path/to/finetune/manifest/directory/for/a/particular/language \
  common.wandb_project=<wandb project name> \
  model.w2v_path=/path/to/pretrained/model_large.pt \
  common.log_interval=50 \
  common.log_format=tqdm \
  dataset.max_tokens=1000000 \
  checkpoint.save_dir=/path/to/save/model/fine_tune_checkpoints \
  +optimization.update_freq='[1]' \
  distributed_training.distributed_world_size=<total GPUs> \
  --config-dir /path/to/configs/directory \
  --config-name ai4b_xlsr"

```

For IndicWav2Vec Base model we override the above configuration with

```
  model.w2v_path=/path/to/pretrained/model_base.pt \
  --config-name ai4b_base"

```

Configs for both the models are provided in the [finetune\_configs](https://github.com/AI4Bharat/IndicWav2Vec/blob/main) directory

#### Finetuning procedure and code

### Language Modelling (LM)

We train 6-grams Statistical LM using [KenLM library](https://kheafield.com/code/kenlm/).

#### Data preparation

*   Prepare training manifest using [fairseq](https://github.com/pytorch/fairseq/tree/master/examples/wav2vec) and copy its path.
*   Prepare clean\_dump.txt containing `"\n"` separated rows of text data.
*   Add `dict.txt` containing `comma(,)` separated rows of characters and its' index.
*   Add these two files to the `{lang}` folder, where `lang` denotes the language for which lm is to be trained.

> Command to clean transcripts and prepare lexicon for training:

```
python utils/clean_corpus.py -d=<lm directory path> -l=<lang> --transcript=<speech transcript folder path> --st=<start code of lang> --en=<end code of lang> --top_k=<'k' most frequent words for vocab>

```

#### Training details

> Run lm-training: `bash scripts/train_lm.sh <lm directory path> <lang>`.

Ouput will be generate at: `"<lm directory path>/<lang>"`.

### Evaluating ASR models

*   python3 fairseq/speech\_recognition/infer.py $\{manifest\_path} --task audio\_finetuning \\--nbest 1 --path $\{checkpoint\_path} --gen-subset $\{valid|test} --results-path $\{result\_path} --w2l-decoder \{viterbi | kenlm} \\--lm-weight 0 --word-score 0 --sil-weight 0 --criterion ctc --labels ltr --max-tokens 5000000 \\--post-process letterThis is default fairseq evaluation command and more documentation about this command can be seen [here](https://github.com/AI4Bharat/IndicWav2Vec/blob/main)
*

### Model exporting

*   Huggingface
*   ONNX/Torchscript

### Deployment

*   Server (Flask)
    *   Install Flask `pip install flask flask-cors`
    *   Change path for the acoustic models, decoding strategy, language models and lexicon in the Make path changes in `app/models_dict.json`
    *   run server `python app/flask_dep.py`
*   Server (Torchserve)
    *   Coming soon
*   Mobile
    *   Coming soon

## Cite

Please cite out work as:

```
@inproceedings{javed2021building,
    title = {Towards Building ASR Systems for the Next Billion Users},
    author = {Tahir Javed and Sumanth Doddapaneni and Abhigyan Raman and Kaushal Santosh Bhogale and Gowtham Ramesh and Anoop Kunchukuttan and Pratyush Kumar and Mitesh M. Khapra},
    booktitle = "Proceedings of the AAAI Conference on Artificial Intelligence",
    year = "2022 (to appear)",
}
```

## License

IndicWav2Vec is [MIT](https://choosealicense.com/licenses/mit/)-licensed. The license applies to all the pretrained, fine-tuned and language models

## Contributors

*   Tahir Javed, (IITM, AI4Bharat)
*   Sumanth Doddapaneni, (AI4Bharat, RBCDSAI)
*   Abhigyan Raman, (AI4Bharat)
*   Kaushal Bhogale, (AI4Bharat)
*   Gowtham Ramesh, (AI4Bharat, RBCDSAI)
*   Anoop Kunchukuttan, (Microsoft, AI4Bharat)
*   Pratyush Kumar, (Microsoft, AI4Bharat)
*   Mitesh Khapra, (IITM, AI4Bharat, RBCDSAI)

## Contact

*   Anoop Kunchukuttan ([anoop.kunchukuttan@gmail.com](mailto:anoop.kunchukuttan@gmail.com))
*   Mitesh Khapra ([miteshk@cse.iitm.ac.in](mailto:miteshk@cse.iitm.ac.in))
*   Pratyush Kumar ([pratyush@cse.iitm.ac.in](mailto:pratyush@cse.iitm.ac.in))

## Acknowledgements

We would like to thank EkStep Foundation for their generous grant which helped in setting up the Centre for AI4Bharat at IIT Madras to support our students, research staff, data and computational requirements. We would like to thank The Ministry of Electronics and Information Technology (NLTM) for its grant to support the creation of datasets and models for Indian languages under its ambitions Bhashini project. We would also like to thank the Centre for Development of Advanced Computing, India (C-DAC) for providing access to the Param Siddhi supercomputer for training our models. Lastly, we would like to thank Microsoft for its grant to create datasets, tools and resources for Indian languages.



