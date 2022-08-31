---
blocks:
  - body: >
      # Shrutilipi


      ***


      Shrutilipi is a labelled ASR corpus obtained by mining parallel audio and
      text pairs at the document scale from [All India
      Radio](https://newsonair.gov.in/ "All India Radio") news bulletins for 12
      Indian languages: Bengali, Gujarati, Hindi, Kannada, Malayalam, Marathi,
      Odia, Punjabi, Sanskrit, Tamil, Telugu, Urdu. The corpus has over 6400
      hours of data across all languages.


      Read more in our paper - [*Effectiveness of Mining Audio and Text Pairs
      from Public Data for Improving ASR Systems for Low-Resource
      Languages*](https://arxiv.org/abs/2208.12666 "Effectiveness of Mining
      Audio and Text Pairs from Public Data for Improving ASR Systems for
      Low-Resource Languages")
    _template: content
  - caption: Dataset Details
    markdownTable: |-
      |  Language | Size (in Hours) |
      |:---------:|:---------------:|
      |  bengali  |       443       |
      |  gujarati |       460       |
      |   hindi   |       1620      |
      |  kannada  |       459       |
      | malayalam |       359       |
      |  marathi  |       1015      |
      |    odia   |       601       |
      |  punjabi  |        94       |
      |  sanskrit |        27       |
      |   tamil   |       794       |
      |   telugu  |       390       |
      |    urdu   |       193       |
      |   Total   |       6457      |
    color: default
    _template: table
  - body: >
      ## Shrutilipi - Mining Process


      We summarize the key procedure we used for mining audio-text pairs from
      documents from the AIR dataset in the figure below. For a detailed
      description of the data mining process, please refer to our
      [paper](https://arxiv.org/abs/2208.12666 "paper").


      ![](https://res.cloudinary.com/ai4bharat/image/upload/v1661927359/alignment-figure_pie8yd.png
      "Mining Process")
    _template: content
  - body: >
      ## Citing our work


      If you are using any of the resources, please cite the following article:


      ```

      @misc{https://doi.org/10.48550/arxiv.2208.12666,
        doi = {10.48550/ARXIV.2208.12666},
        url = {https://arxiv.org/abs/2208.12666},
        author = {Bhogale, Kaushal Santosh and Raman, Abhigyan and Javed, Tahir and Doddapaneni, Sumanth and Kunchukuttan, Anoop and Kumar, Pratyush and Khapra, Mitesh M.},
        title = {Effectiveness of Mining Audio and Text Pairs from Public Data for Improving ASR Systems for Low-Resource Languages},
        publisher = {arXiv},
        year = {2022},
        copyright = {arXiv.org perpetual, non-exclusive license}
      }

      ```


      We would like to hear from you if:


      *   You are using our resources. Please let us know how you are putting
      these resources to use.

      *   You have any feedback on these resources.


      ## License


      The Shrutilipi dataset, models and code are released under the MIT
      License.


      ## Contributors


      *   Kaushal Bhogale

      *   Abhigyan Raman

      *   Tahir Javed

      *   Sumanth Doddapaneni

      *   Anoop Kunchukuttan

      *   Mitesh Khapra

      *   Pratush Kumar


      ## Contact


      *   Anoop Kunchukuttan
      ([anoop.kunchukuttan@gmail.com](mailto:anoop.kunchukuttan@gmail.com))

      *   Mitesh Khapra
      ([miteshk@cse.iitm.ac.in](mailto:miteshk@cse.iitm.ac.in))

      *   Pratyush Kumar
      ([pratyush@cse.iitm.ac.in](mailto:pratyush@cse.iitm.ac.in))


      ## Acknowledgements


      We would like to thank the Ministry of Electronics and Information
      Technology ([MeitY](https://www.meity.gov.in/ "MeitY")) of the Government
      of India and the Centre for Development of Advanced Computing
      ([C-DAC](https://www.cdac.in/index.aspx?id=pune "CDAC")), Pune for
      generously supporting this work and providing us access to multiple GPU
      nodes on the Param Siddhi Supercomputer. We would like to thank the EkStep
      Foundation and Nilekani Philanthropies for their generous grant which went
      into hiring human resources as well as cloud resources needed for this
      work. We would like to thank Megh Makhwana from Nvidia for helping in
      training Conformer-based ASR models. We would like to thank the EkStep
      Foundation for providing the Tarini dataset. We would like to thank Janki
      Nawale and Anupama Sujatha from AI4Bharat for helping in coordinating the
      annotation task, and extend thanks to all the annotators of AI4Bharat
      team.&#x20;
    _template: content
---

