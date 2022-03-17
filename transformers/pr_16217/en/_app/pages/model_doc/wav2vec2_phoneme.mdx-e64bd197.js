import{S as Et,i as qt,s as $t,e as n,k as c,w as q,t as s,M as Lt,c as r,d as t,m as l,a,x as $,h as i,b as p,F as o,g as h,y as L,L as Ft,q as F,o as I,B as A}from"../../chunks/vendor-6b77c823.js";import{D as ze}from"../../chunks/Docstring-abef54e3.js";import{I as Yo}from"../../chunks/IconCopyLink-7a11ce68.js";function It(Je){let v,Y,_,g,ie,B,Ge,ce,Ke,Pe,T,y,le,N,Ye,de,eo,xe,z,oo,D,to,no,Ce,ee,ro,We,oe,pe,ao,Ve,te,so,Ee,f,he,io,co,me,lo,po,S,ho,ne,mo,fo,uo,fe,_o,go,ue,vo,qe,P,ko,O,bo,To,$e,R,wo,U,yo,Le,x,zo,M,Po,xo,Fe,C,Co,_e,Wo,Vo,Ie,w,W,ge,H,Eo,ve,qo,Ae,m,X,$o,ke,Lo,Fo,j,Io,re,Ao,Bo,No,V,Q,Do,be,So,Oo,E,Z,Ro,Te,Uo,Mo,k,J,Ho,we,Xo,jo,G,Qo,ye,Zo,Jo,Go,ae,K,Be;return B=new Yo({}),N=new Yo({}),H=new Yo({}),X=new ze({props:{name:"class transformers.Wav2Vec2PhonemeCTCTokenizer",anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"phone_delimiter_token",val:" = ' '"},{name:"word_delimiter_token",val:" = None"},{name:"do_phonemize",val:" = True"},{name:"phonemizer_lang",val:" = 'en-us'"},{name:"phonemizer_backend",val:" = 'espeak'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16217/src/transformers/models/wav2vec2_phoneme/tokenization_wav2vec2_phoneme.py#L90",parametersDescription:[{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.do_phonemize",description:`<strong>do_phonemize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether the tokenizer should phonetize the input or not. Only if a sequence of phonemes is passed to the
tokenizer, <code>do_phonemize</code> should be set to <code>False</code>.`,name:"do_phonemize"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.phonemizer_lang",description:`<strong>phonemizer_lang</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;en-us&quot;</code>) &#x2014;
The language of the phoneme set to which the tokenizer should phonetize the input text to.`,name:"phonemizer_lang"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.phonemizer_backend",description:`<strong>phonemizer_backend</strong> (<code>str</code>, <em>optional</em>. defaults to <code>&quot;espeak&quot;</code>) &#x2014;
The backend phonetization library that shall be used by the phonemizer library. Defaults to <code>espeak-ng</code>.
See the <a href="https://github.com/bootphon/phonemizer#readme" rel="nofollow">phonemizer package</a>. for more information.</p>
<p>**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/pr_16217/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"phonemizer_backend"}]}}),Q=new ze({props:{name:"__call__",anchor:"transformers.PreTrainedTokenizerBase.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.file_utils.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"is_split_into_words",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.file_utils.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16217/src/transformers/tokenization_utils_base.py#L2379",parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string or a list of strings
(pretokenized string). If the sequences are provided as list of strings (pretokenized), you must set
<code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.text_pair",description:`<strong>text_pair</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string or a list of strings
(pretokenized string). If the sequences are provided as list of strings (pretokenized), you must set
<code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text_pair"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_16217/en/internal/file_utils#transformers.file_utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_16217/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or
to the maximum acceptable input length for the model if that argument is not provided. This will
truncate token by token, removing a token from the longest sequence in the pair if a pair of
sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the first sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_second&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the second sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).</li>
</ul>`,name:"truncation"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_16217/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.return_token_type_ids",description:`<strong>return_token_type_ids</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return token type IDs. If left to the default, will return the token type IDs according to
the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"return_token_type_ids"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"return_attention_mask"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.return_overflowing_tokens",description:`<strong>return_overflowing_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return overflowing token sequences. If a pair of sequences of input ids (or a batch
of pairs) is provided with <code>truncation_strategy = longest_first</code> or <code>True</code>, an error is raised instead
of returning overflowing tokens.`,name:"return_overflowing_tokens"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.return_special_tokens_mask",description:`<strong>return_special_tokens_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return special tokens mask information.`,name:"return_special_tokens_mask"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.return_offsets_mapping",description:`<strong>return_offsets_mapping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return <code>(char_start, char_end)</code> for each token.</p>
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/pr_16217/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16217/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a> with the following fields:</p>
<ul>
<li>
<p><strong>input_ids</strong> \u2014 List of token ids to be fed to a model.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
</li>
<li>
<p><strong>token_type_ids</strong> \u2014 List of token type ids to be fed to a model (when <code>return_token_type_ids=True</code> or
if <em>\u201Ctoken_type_ids\u201D</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a></p>
</li>
<li>
<p><strong>attention_mask</strong> \u2014 List of indices specifying which tokens should be attended to by the model (when
<code>return_attention_mask=True</code> or if <em>\u201Cattention_mask\u201D</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
</li>
<li>
<p><strong>overflowing_tokens</strong> \u2014 List of overflowing tokens sequences (when a <code>max_length</code> is specified and
<code>return_overflowing_tokens=True</code>).</p>
</li>
<li>
<p><strong>num_truncated_tokens</strong> \u2014 Number of tokens truncated (when a <code>max_length</code> is specified and
<code>return_overflowing_tokens=True</code>).</p>
</li>
<li>
<p><strong>special_tokens_mask</strong> \u2014 List of 0s and 1s, with 1 specifying added special tokens and 0 specifying
regular sequence tokens (when <code>add_special_tokens=True</code> and <code>return_special_tokens_mask=True</code>).</p>
</li>
<li>
<p><strong>length</strong> \u2014 The length of the inputs (when <code>return_length=True</code>)</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16217/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),Z=new ze({props:{name:"batch_decode",anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.batch_decode",parameters:[{name:"sequences",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"output_char_offsets",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16217/src/transformers/models/wav2vec2_phoneme/tokenization_wav2vec2_phoneme.py#L489",parametersDescription:[{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.batch_decode.sequences",description:`<strong>sequences</strong> (<code>Union[List[int], List[List[int]], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"sequences"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.batch_decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.batch_decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.batch_decode.output_char_offsets",description:`<strong>output_char_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to output character offsets. Character offsets can be used in combination with the
sampling rate and model downsampling rate to compute the time-stamps of transcribed characters.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Please take a look at the Example of <code>decode</code> to better
understand how to make use of <code>output_word_offsets</code>.
<code>batch_decode</code> works analogous with phonemes
and batched output.</p>

					</div>`,name:"output_char_offsets"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.batch_decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],returnDescription:`
<p>The
decoded sentence. Will be a
<code>Wav2Vec2PhonemeCTCTokenizerOutput</code> when
<code>output_char_offsets == True</code>.</p>
`,returnType:`
<p><code>List[str]</code> or <code>Wav2Vec2PhonemeCTCTokenizerOutput</code></p>
`}}),J=new ze({props:{name:"decode",anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.decode",parameters:[{name:"token_ids",val:": typing.Union[int, typing.List[int], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"output_char_offsets",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16217/src/transformers/models/wav2vec2_phoneme/tokenization_wav2vec2_phoneme.py#L433",parametersDescription:[{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.decode.token_ids",description:`<strong>token_ids</strong> (<code>Union[int, List[int], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"token_ids"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.decode.output_char_offsets",description:`<strong>output_char_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to output character offsets. Character offsets can be used in combination with the
sampling rate and model downsampling rate to compute the time-stamps of transcribed characters.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Please take a look at the Example of <code>decode</code> to better
understand how to make use of <code>output_word_offsets</code>.
<code>batch_decode</code> works the same way with
phonemes.</p>

					</div>`,name:"output_char_offsets"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],returnDescription:`
<p>The decoded
sentence. Will be a <code>Wav2Vec2PhonemeCTCTokenizerOutput</code>
when <code>output_char_offsets == True</code>.</p>
`,returnType:`
<p><code>str</code> or <code>Wav2Vec2PhonemeCTCTokenizerOutput</code></p>
`}}),K=new ze({props:{name:"phonemize",anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.phonemize",parameters:[{name:"text",val:": str"},{name:"phonemizer_lang",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16217/src/transformers/models/wav2vec2_phoneme/tokenization_wav2vec2_phoneme.py#L236"}}),{c(){v=n("meta"),Y=c(),_=n("h1"),g=n("a"),ie=n("span"),q(B.$$.fragment),Ge=c(),ce=n("span"),Ke=s("Wav2Vec2Phoneme"),Pe=c(),T=n("h2"),y=n("a"),le=n("span"),q(N.$$.fragment),Ye=c(),de=n("span"),eo=s("Overview"),xe=c(),z=n("p"),oo=s("The Wav2Vec2Phoneme model was proposed in "),D=n("a"),to=s(`Simple and Effective Zero-shot Cross-lingual Phoneme Recognition (Xu et al.,
2021`),no=s(" by Qiantong Xu, Alexei Baevski, Michael Auli."),Ce=c(),ee=n("p"),ro=s("The abstract from the paper is the following:"),We=c(),oe=n("p"),pe=n("em"),ao=s(`Recent progress in self-training, self-supervised pretraining and unsupervised learning enabled well performing speech
recognition systems without any labeled data. However, in many cases there is labeled data available for related
languages which is not utilized by these methods. This paper extends previous work on zero-shot cross-lingual transfer
learning by fine-tuning a multilingually pretrained wav2vec 2.0 model to transcribe unseen languages. This is done by
mapping phonemes of the training languages to the target language using articulatory features. Experiments show that
this simple method significantly outperforms prior work which introduced task-specific architectures and used only part
of a monolingually pretrained model.`),Ve=c(),te=n("p"),so=s("Tips:"),Ee=c(),f=n("ul"),he=n("li"),io=s("Wav2Vec2Phoneme uses the exact same architecture as Wav2Vec2"),co=c(),me=n("li"),lo=s("Wav2Vec2Phoneme is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),po=c(),S=n("li"),ho=s(`Wav2Vec2Phoneme model was trained using connectionist temporal classification (CTC) so the model output has to be
decoded using `),ne=n("a"),mo=s("Wav2Vec2PhonemeCTCTokenizer"),fo=s("."),uo=c(),fe=n("li"),_o=s(`Wav2Vec2Phoneme can be fine-tuned on multiple language at once and decode unseen languages in a single forward pass
to a sequence of phonemes`),go=c(),ue=n("li"),vo=s(`By default the model outputs a sequence of phonemes. In order to transform the phonemes to a sequence of words one
should make use of a dictionary and language model.`),qe=c(),P=n("p"),ko=s("Relevant checkpoints can be found under "),O=n("a"),bo=s("https://huggingface.co/models?other=phoneme-recognition"),To=s("."),$e=c(),R=n("p"),wo=s("This model was contributed by "),U=n("a"),yo=s("patrickvonplaten"),Le=c(),x=n("p"),zo=s("The original code can be found "),M=n("a"),Po=s("here"),xo=s("."),Fe=c(),C=n("p"),Co=s("Wav2Vec2Phoneme\u2019s architecture is based on the Wav2Vec2 model, so one can refer to "),_e=n("code"),Wo=s("Wav2Vec2"),Vo=s("\u2019s documentation page except for the tokenizer."),Ie=c(),w=n("h2"),W=n("a"),ge=n("span"),q(H.$$.fragment),Eo=c(),ve=n("span"),qo=s("Wav2Vec2PhonemeCTCTokenizer"),Ae=c(),m=n("div"),q(X.$$.fragment),$o=c(),ke=n("p"),Lo=s("Constructs a Wav2Vec2PhonemeCTC tokenizer."),Fo=c(),j=n("p"),Io=s("This tokenizer inherits from "),re=n("a"),Ao=s("PreTrainedTokenizer"),Bo=s(` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),No=c(),V=n("div"),q(Q.$$.fragment),Do=c(),be=n("p"),So=s(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences.`),Oo=c(),E=n("div"),q(Z.$$.fragment),Ro=c(),Te=n("p"),Uo=s("Convert a list of lists of token ids into a list of strings by calling decode."),Mo=c(),k=n("div"),q(J.$$.fragment),Ho=c(),we=n("p"),Xo=s(`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),jo=c(),G=n("p"),Qo=s("Similar to doing "),ye=n("code"),Zo=s("self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),Jo=s("."),Go=c(),ae=n("div"),q(K.$$.fragment),this.h()},l(e){const d=Lt('[data-svelte="svelte-1phssyn"]',document.head);v=r(d,"META",{name:!0,content:!0}),d.forEach(t),Y=l(e),_=r(e,"H1",{class:!0});var Ne=a(_);g=r(Ne,"A",{id:!0,class:!0,href:!0});var et=a(g);ie=r(et,"SPAN",{});var ot=a(ie);$(B.$$.fragment,ot),ot.forEach(t),et.forEach(t),Ge=l(Ne),ce=r(Ne,"SPAN",{});var tt=a(ce);Ke=i(tt,"Wav2Vec2Phoneme"),tt.forEach(t),Ne.forEach(t),Pe=l(e),T=r(e,"H2",{class:!0});var De=a(T);y=r(De,"A",{id:!0,class:!0,href:!0});var nt=a(y);le=r(nt,"SPAN",{});var rt=a(le);$(N.$$.fragment,rt),rt.forEach(t),nt.forEach(t),Ye=l(De),de=r(De,"SPAN",{});var at=a(de);eo=i(at,"Overview"),at.forEach(t),De.forEach(t),xe=l(e),z=r(e,"P",{});var Se=a(z);oo=i(Se,"The Wav2Vec2Phoneme model was proposed in "),D=r(Se,"A",{href:!0,rel:!0});var st=a(D);to=i(st,`Simple and Effective Zero-shot Cross-lingual Phoneme Recognition (Xu et al.,
2021`),st.forEach(t),no=i(Se," by Qiantong Xu, Alexei Baevski, Michael Auli."),Se.forEach(t),Ce=l(e),ee=r(e,"P",{});var it=a(ee);ro=i(it,"The abstract from the paper is the following:"),it.forEach(t),We=l(e),oe=r(e,"P",{});var ct=a(oe);pe=r(ct,"EM",{});var lt=a(pe);ao=i(lt,`Recent progress in self-training, self-supervised pretraining and unsupervised learning enabled well performing speech
recognition systems without any labeled data. However, in many cases there is labeled data available for related
languages which is not utilized by these methods. This paper extends previous work on zero-shot cross-lingual transfer
learning by fine-tuning a multilingually pretrained wav2vec 2.0 model to transcribe unseen languages. This is done by
mapping phonemes of the training languages to the target language using articulatory features. Experiments show that
this simple method significantly outperforms prior work which introduced task-specific architectures and used only part
of a monolingually pretrained model.`),lt.forEach(t),ct.forEach(t),Ve=l(e),te=r(e,"P",{});var dt=a(te);so=i(dt,"Tips:"),dt.forEach(t),Ee=l(e),f=r(e,"UL",{});var b=a(f);he=r(b,"LI",{});var pt=a(he);io=i(pt,"Wav2Vec2Phoneme uses the exact same architecture as Wav2Vec2"),pt.forEach(t),co=l(b),me=r(b,"LI",{});var ht=a(me);lo=i(ht,"Wav2Vec2Phoneme is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),ht.forEach(t),po=l(b),S=r(b,"LI",{});var Oe=a(S);ho=i(Oe,`Wav2Vec2Phoneme model was trained using connectionist temporal classification (CTC) so the model output has to be
decoded using `),ne=r(Oe,"A",{href:!0});var mt=a(ne);mo=i(mt,"Wav2Vec2PhonemeCTCTokenizer"),mt.forEach(t),fo=i(Oe,"."),Oe.forEach(t),uo=l(b),fe=r(b,"LI",{});var ft=a(fe);_o=i(ft,`Wav2Vec2Phoneme can be fine-tuned on multiple language at once and decode unseen languages in a single forward pass
to a sequence of phonemes`),ft.forEach(t),go=l(b),ue=r(b,"LI",{});var ut=a(ue);vo=i(ut,`By default the model outputs a sequence of phonemes. In order to transform the phonemes to a sequence of words one
should make use of a dictionary and language model.`),ut.forEach(t),b.forEach(t),qe=l(e),P=r(e,"P",{});var Re=a(P);ko=i(Re,"Relevant checkpoints can be found under "),O=r(Re,"A",{href:!0,rel:!0});var _t=a(O);bo=i(_t,"https://huggingface.co/models?other=phoneme-recognition"),_t.forEach(t),To=i(Re,"."),Re.forEach(t),$e=l(e),R=r(e,"P",{});var Ko=a(R);wo=i(Ko,"This model was contributed by "),U=r(Ko,"A",{href:!0,rel:!0});var gt=a(U);yo=i(gt,"patrickvonplaten"),gt.forEach(t),Ko.forEach(t),Le=l(e),x=r(e,"P",{});var Ue=a(x);zo=i(Ue,"The original code can be found "),M=r(Ue,"A",{href:!0,rel:!0});var vt=a(M);Po=i(vt,"here"),vt.forEach(t),xo=i(Ue,"."),Ue.forEach(t),Fe=l(e),C=r(e,"P",{});var Me=a(C);Co=i(Me,"Wav2Vec2Phoneme\u2019s architecture is based on the Wav2Vec2 model, so one can refer to "),_e=r(Me,"CODE",{});var kt=a(_e);Wo=i(kt,"Wav2Vec2"),kt.forEach(t),Vo=i(Me,"\u2019s documentation page except for the tokenizer."),Me.forEach(t),Ie=l(e),w=r(e,"H2",{class:!0});var He=a(w);W=r(He,"A",{id:!0,class:!0,href:!0});var bt=a(W);ge=r(bt,"SPAN",{});var Tt=a(ge);$(H.$$.fragment,Tt),Tt.forEach(t),bt.forEach(t),Eo=l(He),ve=r(He,"SPAN",{});var wt=a(ve);qo=i(wt,"Wav2Vec2PhonemeCTCTokenizer"),wt.forEach(t),He.forEach(t),Ae=l(e),m=r(e,"DIV",{class:!0});var u=a(m);$(X.$$.fragment,u),$o=l(u),ke=r(u,"P",{});var yt=a(ke);Lo=i(yt,"Constructs a Wav2Vec2PhonemeCTC tokenizer."),yt.forEach(t),Fo=l(u),j=r(u,"P",{});var Xe=a(j);Io=i(Xe,"This tokenizer inherits from "),re=r(Xe,"A",{href:!0});var zt=a(re);Ao=i(zt,"PreTrainedTokenizer"),zt.forEach(t),Bo=i(Xe,` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),Xe.forEach(t),No=l(u),V=r(u,"DIV",{class:!0});var je=a(V);$(Q.$$.fragment,je),Do=l(je),be=r(je,"P",{});var Pt=a(be);So=i(Pt,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences.`),Pt.forEach(t),je.forEach(t),Oo=l(u),E=r(u,"DIV",{class:!0});var Qe=a(E);$(Z.$$.fragment,Qe),Ro=l(Qe),Te=r(Qe,"P",{});var xt=a(Te);Uo=i(xt,"Convert a list of lists of token ids into a list of strings by calling decode."),xt.forEach(t),Qe.forEach(t),Mo=l(u),k=r(u,"DIV",{class:!0});var se=a(k);$(J.$$.fragment,se),Ho=l(se),we=r(se,"P",{});var Ct=a(we);Xo=i(Ct,`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),Ct.forEach(t),jo=l(se),G=r(se,"P",{});var Ze=a(G);Qo=i(Ze,"Similar to doing "),ye=r(Ze,"CODE",{});var Wt=a(ye);Zo=i(Wt,"self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),Wt.forEach(t),Jo=i(Ze,"."),Ze.forEach(t),se.forEach(t),Go=l(u),ae=r(u,"DIV",{class:!0});var Vt=a(ae);$(K.$$.fragment,Vt),Vt.forEach(t),u.forEach(t),this.h()},h(){p(v,"name","hf:doc:metadata"),p(v,"content",JSON.stringify(At)),p(g,"id","wav2vec2phoneme"),p(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(g,"href","#wav2vec2phoneme"),p(_,"class","relative group"),p(y,"id","overview"),p(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(y,"href","#overview"),p(T,"class","relative group"),p(D,"href","https://arxiv.org/abs/2109.11680"),p(D,"rel","nofollow"),p(ne,"href","/docs/transformers/pr_16217/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer"),p(O,"href","https://huggingface.co/models?other=phoneme-recognition"),p(O,"rel","nofollow"),p(U,"href","https://huggingface.co/patrickvonplaten"),p(U,"rel","nofollow"),p(M,"href","https://github.com/pytorch/fairseq/tree/master/fairseq/models/wav2vec"),p(M,"rel","nofollow"),p(W,"id","transformers.Wav2Vec2PhonemeCTCTokenizer"),p(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(W,"href","#transformers.Wav2Vec2PhonemeCTCTokenizer"),p(w,"class","relative group"),p(re,"href","/docs/transformers/pr_16217/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),p(V,"class","docstring"),p(E,"class","docstring"),p(k,"class","docstring"),p(ae,"class","docstring"),p(m,"class","docstring")},m(e,d){o(document.head,v),h(e,Y,d),h(e,_,d),o(_,g),o(g,ie),L(B,ie,null),o(_,Ge),o(_,ce),o(ce,Ke),h(e,Pe,d),h(e,T,d),o(T,y),o(y,le),L(N,le,null),o(T,Ye),o(T,de),o(de,eo),h(e,xe,d),h(e,z,d),o(z,oo),o(z,D),o(D,to),o(z,no),h(e,Ce,d),h(e,ee,d),o(ee,ro),h(e,We,d),h(e,oe,d),o(oe,pe),o(pe,ao),h(e,Ve,d),h(e,te,d),o(te,so),h(e,Ee,d),h(e,f,d),o(f,he),o(he,io),o(f,co),o(f,me),o(me,lo),o(f,po),o(f,S),o(S,ho),o(S,ne),o(ne,mo),o(S,fo),o(f,uo),o(f,fe),o(fe,_o),o(f,go),o(f,ue),o(ue,vo),h(e,qe,d),h(e,P,d),o(P,ko),o(P,O),o(O,bo),o(P,To),h(e,$e,d),h(e,R,d),o(R,wo),o(R,U),o(U,yo),h(e,Le,d),h(e,x,d),o(x,zo),o(x,M),o(M,Po),o(x,xo),h(e,Fe,d),h(e,C,d),o(C,Co),o(C,_e),o(_e,Wo),o(C,Vo),h(e,Ie,d),h(e,w,d),o(w,W),o(W,ge),L(H,ge,null),o(w,Eo),o(w,ve),o(ve,qo),h(e,Ae,d),h(e,m,d),L(X,m,null),o(m,$o),o(m,ke),o(ke,Lo),o(m,Fo),o(m,j),o(j,Io),o(j,re),o(re,Ao),o(j,Bo),o(m,No),o(m,V),L(Q,V,null),o(V,Do),o(V,be),o(be,So),o(m,Oo),o(m,E),L(Z,E,null),o(E,Ro),o(E,Te),o(Te,Uo),o(m,Mo),o(m,k),L(J,k,null),o(k,Ho),o(k,we),o(we,Xo),o(k,jo),o(k,G),o(G,Qo),o(G,ye),o(ye,Zo),o(G,Jo),o(m,Go),o(m,ae),L(K,ae,null),Be=!0},p:Ft,i(e){Be||(F(B.$$.fragment,e),F(N.$$.fragment,e),F(H.$$.fragment,e),F(X.$$.fragment,e),F(Q.$$.fragment,e),F(Z.$$.fragment,e),F(J.$$.fragment,e),F(K.$$.fragment,e),Be=!0)},o(e){I(B.$$.fragment,e),I(N.$$.fragment,e),I(H.$$.fragment,e),I(X.$$.fragment,e),I(Q.$$.fragment,e),I(Z.$$.fragment,e),I(J.$$.fragment,e),I(K.$$.fragment,e),Be=!1},d(e){t(v),e&&t(Y),e&&t(_),A(B),e&&t(Pe),e&&t(T),A(N),e&&t(xe),e&&t(z),e&&t(Ce),e&&t(ee),e&&t(We),e&&t(oe),e&&t(Ve),e&&t(te),e&&t(Ee),e&&t(f),e&&t(qe),e&&t(P),e&&t($e),e&&t(R),e&&t(Le),e&&t(x),e&&t(Fe),e&&t(C),e&&t(Ie),e&&t(w),A(H),e&&t(Ae),e&&t(m),A(X),A(Q),A(Z),A(J),A(K)}}}const At={local:"wav2vec2phoneme",sections:[{local:"overview",title:"Overview"},{local:"transformers.Wav2Vec2PhonemeCTCTokenizer",title:"Wav2Vec2PhonemeCTCTokenizer"}],title:"Wav2Vec2Phoneme"};function Bt(Je,v,Y){let{fw:_}=v;return Je.$$set=g=>{"fw"in g&&Y(0,_=g.fw)},[_]}class Ot extends Et{constructor(v){super();qt(this,v,Bt,It,$t,{fw:0})}}export{Ot as default,At as metadata};
