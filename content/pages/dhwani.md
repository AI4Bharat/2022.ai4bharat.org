---
blocks:
  - body: "# ***IndicAudioCorp***\n\n[Website](http://indicnlp.ai4bharat.org/)\_|\_[Paper](https://arxiv.org/abs)\_|\_[Downloads](https://arxiv.org/abs)\n\n***\n\nIndicAudioCorp is a Unlabelled ASR corpus obtained from YouTube and\_[News On AIR](https://newsonair.gov.in/)\_news bulletins. The dataset contains raw audios across 40 Indian Languages.\n\n## Dataset details\n\n![](https://res.cloudinary.com/ai4bharat/image/upload/v1657780987/dhwani_v62iyw.png)\n\n\_Numbers represent hours\n\n## Table of contents\n\n*   [Table of contents](https://github.com/AI4Bharat/IndicAudioCorp#table-of-contents)\n*   [Dataset Format](https://github.com/AI4Bharat/IndicAudioCorp#dataset-format)\n    *   [Folder Structure](https://github.com/AI4Bharat/IndicAudioCorp#folder-structure)\n*   [Downloads](https://github.com/AI4Bharat/IndicAudioCorp#downloads)\n*   [Citing our work](https://github.com/AI4Bharat/IndicAudioCorp#citing-our-work)\n*   [License](https://github.com/AI4Bharat/IndicAudioCorp#license)\n*   [Contributors](https://github.com/AI4Bharat/IndicAudioCorp#contributors)\n*   [Contact](https://github.com/AI4Bharat/IndicAudioCorp#contact)\n*   [Acknowledgements](https://github.com/AI4Bharat/IndicAudioCorp#acknowledgements)\n\n## Dataset Format\n\n*   The audio files present in separate folders.\n*   For YouTubeThe audio filenames are named YouTube-ids and for Newsonair, the contatination of region name, bulletin timing makes the filename.\n\n### Folder Structure\n\nFor YouTube\n\n```\nYT\n├── bengali\n│   ├── XXXXXXXXXXX.wav\n│   ├── XXXXXXXXXXX.wav\n│   ├── XXXXXXXXXXX.wav\n│   └── ...\n├── gujarati\n├── ...\n\n```\n\nFor NOA\n\n```\nNOA\n├── Audio\n│   ├── assamese\n│       ├── audio\n│          ├── newsonair.nic.in\n│           ├── NSD-Assamese-Assamese-0705-0715-201810107486.mp3\n│           ├── NSD-Assamese-Assamese-0705-0715-20181011161537.mp3\n├── gujarati\n├── ...\n\n```\n"
    _template: content
  - markdownTable: >-
      # Downloads


      |Dataset | Link 

      |-|-|

      |YouTube|
      [urls](https://github.com/AI4Bharat/IndicWav2Vec/tree/main/data_prep_scripts/urls)

      |Newsonaair| [url](newsonair.nic.in)|
    color: default
    _template: table
  - body: >
      ## Citing our work


      If you are using any of the resources, please cite the following article:


      ```



      ```


      We would like to hear from you if:


      *   You are using our resources. Please let us know how you are putting
      these resources to use.

      *   You have any feedback on these resources.


      ## License


      The IndicAudioCorp dataset, models and code are released under the MIT
      License.


      ## Contributors


      \<>


      ## Contact


      *   Anoop Kunchukuttan
      ([anoop.kunchukuttan@gmail.com](mailto:anoop.kunchukuttan@gmail.com))

      *   Mitesh Khapra
      ([miteshk@cse.iitm.ac.in](mailto:miteshk@cse.iitm.ac.in))

      *   Pratyush Kumar
      ([pratyush@cse.iitm.ac.in](mailto:pratyush@cse.iitm.ac.in))


      ## Acknowledgements


      We would like to thank EkStep Foundation for their generous grant which
      helped in setting up the Centre for AI4Bharat at IIT Madras to support our
      students, research staff, data and computational requirements. We would
      like to thank The Ministry of Electronics and Information Technology
      (NLTM) for its grant to support the creation of datasets and models for
      Indian languages under its ambitions Bhashini project. We would also like
      to thank the Centre for Development of Advanced Computing, India (C-DAC)
      for providing access to the Param Siddhi supercomputer for training our
      models. Lastly, we would like to thank Microsoft for its grant to create
      datasets, tools and resources for Indian languages.
    _template: content
---
