import{S as $t,i as Et,s as qt,e as n,k as c,w as E,t as s,M as Lt,c as r,d as t,m as l,a,x as q,h as i,b as p,F as o,g as h,y as L,L as Ft,q as F,o as I,B as A,v as It}from"../../chunks/vendor-6b77c823.js";import{D as ye}from"../../chunks/Docstring-abef54e3.js";import{I as Ko}from"../../chunks/IconCopyLink-7a11ce68.js";function At(Yo){let v,ze,k,w,se,B,Je,ie,Ge,Pe,b,y,ce,N,Ke,le,Ye,xe,z,eo,D,oo,to,Ce,Y,no,We,ee,de,ro,Ve,oe,ao,$e,u,pe,so,io,he,co,lo,S,po,te,ho,mo,uo,me,fo,_o,ue,go,Ee,P,vo,R,ko,bo,qe,O,To,U,wo,Le,x,yo,M,zo,Po,Fe,C,xo,fe,Co,Wo,Ie,T,W,_e,H,Vo,ge,$o,Ae,m,X,Eo,ve,qo,Lo,j,Fo,ne,Io,Ao,Bo,V,Q,No,ke,Do,So,$,Z,Ro,be,Oo,Uo,_,J,Mo,Te,Ho,Xo,G,jo,we,Qo,Zo,Jo,re,K,Be;return B=new Ko({}),N=new Ko({}),H=new Ko({}),X=new ye({props:{name:"class transformers.Wav2Vec2PhonemeCTCTokenizer",anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"phone_delimiter_token",val:" = ' '"},{name:"word_delimiter_token",val:" = None"},{name:"do_phonemize",val:" = True"},{name:"phonemizer_lang",val:" = 'en-us'"},{name:"phonemizer_backend",val:" = 'espeak'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16450/src/transformers/models/wav2vec2_phoneme/tokenization_wav2vec2_phoneme.py#L90",parametersDescription:[{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Additional keyword arguments passed along to <a href="/docs/transformers/pr_16450/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"phonemizer_backend"}]}}),Q=new ye({props:{name:"__call__",anchor:"transformers.PreTrainedTokenizerBase.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"is_split_into_words",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16450/src/transformers/tokenization_utils_base.py#L2371",parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string or a list of strings
(pretokenized string). If the sequences are provided as list of strings (pretokenized), you must set
<code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.text_pair",description:`<strong>text_pair</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string or a list of strings
(pretokenized string). If the sequences are provided as list of strings (pretokenized), you must set
<code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text_pair"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_16450/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_16450/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_16450/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
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
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/pr_16450/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16450/en/main_classes/tokenizer#transformers.BatchEncoding"
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
  href="/docs/transformers/pr_16450/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),Z=new ye({props:{name:"batch_decode",anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.batch_decode",parameters:[{name:"sequences",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"output_char_offsets",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16450/src/transformers/models/wav2vec2_phoneme/tokenization_wav2vec2_phoneme.py#L489",parametersDescription:[{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.batch_decode.sequences",description:`<strong>sequences</strong> (<code>Union[List[int], List[List[int]], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
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
`}}),J=new ye({props:{name:"decode",anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.decode",parameters:[{name:"token_ids",val:": typing.Union[int, typing.List[int], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"output_char_offsets",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16450/src/transformers/models/wav2vec2_phoneme/tokenization_wav2vec2_phoneme.py#L433",parametersDescription:[{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.decode.token_ids",description:`<strong>token_ids</strong> (<code>Union[int, List[int], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
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
`}}),K=new ye({props:{name:"phonemize",anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.phonemize",parameters:[{name:"text",val:": str"},{name:"phonemizer_lang",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16450/src/transformers/models/wav2vec2_phoneme/tokenization_wav2vec2_phoneme.py#L236"}}),{c(){v=n("meta"),ze=c(),k=n("h1"),w=n("a"),se=n("span"),E(B.$$.fragment),Je=c(),ie=n("span"),Ge=s("Wav2Vec2Phoneme"),Pe=c(),b=n("h2"),y=n("a"),ce=n("span"),E(N.$$.fragment),Ke=c(),le=n("span"),Ye=s("Overview"),xe=c(),z=n("p"),eo=s("The Wav2Vec2Phoneme model was proposed in "),D=n("a"),oo=s(`Simple and Effective Zero-shot Cross-lingual Phoneme Recognition (Xu et al.,
2021`),to=s(" by Qiantong Xu, Alexei Baevski, Michael Auli."),Ce=c(),Y=n("p"),no=s("The abstract from the paper is the following:"),We=c(),ee=n("p"),de=n("em"),ro=s(`Recent progress in self-training, self-supervised pretraining and unsupervised learning enabled well performing speech
recognition systems without any labeled data. However, in many cases there is labeled data available for related
languages which is not utilized by these methods. This paper extends previous work on zero-shot cross-lingual transfer
learning by fine-tuning a multilingually pretrained wav2vec 2.0 model to transcribe unseen languages. This is done by
mapping phonemes of the training languages to the target language using articulatory features. Experiments show that
this simple method significantly outperforms prior work which introduced task-specific architectures and used only part
of a monolingually pretrained model.`),Ve=c(),oe=n("p"),ao=s("Tips:"),$e=c(),u=n("ul"),pe=n("li"),so=s("Wav2Vec2Phoneme uses the exact same architecture as Wav2Vec2"),io=c(),he=n("li"),co=s("Wav2Vec2Phoneme is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),lo=c(),S=n("li"),po=s(`Wav2Vec2Phoneme model was trained using connectionist temporal classification (CTC) so the model output has to be
decoded using `),te=n("a"),ho=s("Wav2Vec2PhonemeCTCTokenizer"),mo=s("."),uo=c(),me=n("li"),fo=s(`Wav2Vec2Phoneme can be fine-tuned on multiple language at once and decode unseen languages in a single forward pass
to a sequence of phonemes`),_o=c(),ue=n("li"),go=s(`By default the model outputs a sequence of phonemes. In order to transform the phonemes to a sequence of words one
should make use of a dictionary and language model.`),Ee=c(),P=n("p"),vo=s("Relevant checkpoints can be found under "),R=n("a"),ko=s("https://huggingface.co/models?other=phoneme-recognition"),bo=s("."),qe=c(),O=n("p"),To=s("This model was contributed by "),U=n("a"),wo=s("patrickvonplaten"),Le=c(),x=n("p"),yo=s("The original code can be found "),M=n("a"),zo=s("here"),Po=s("."),Fe=c(),C=n("p"),xo=s("Wav2Vec2Phoneme\u2019s architecture is based on the Wav2Vec2 model, so one can refer to "),fe=n("code"),Co=s("Wav2Vec2"),Wo=s("\u2019s documentation page except for the tokenizer."),Ie=c(),T=n("h2"),W=n("a"),_e=n("span"),E(H.$$.fragment),Vo=c(),ge=n("span"),$o=s("Wav2Vec2PhonemeCTCTokenizer"),Ae=c(),m=n("div"),E(X.$$.fragment),Eo=c(),ve=n("p"),qo=s("Constructs a Wav2Vec2PhonemeCTC tokenizer."),Lo=c(),j=n("p"),Fo=s("This tokenizer inherits from "),ne=n("a"),Io=s("PreTrainedTokenizer"),Ao=s(` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),Bo=c(),V=n("div"),E(Q.$$.fragment),No=c(),ke=n("p"),Do=s(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences.`),So=c(),$=n("div"),E(Z.$$.fragment),Ro=c(),be=n("p"),Oo=s("Convert a list of lists of token ids into a list of strings by calling decode."),Uo=c(),_=n("div"),E(J.$$.fragment),Mo=c(),Te=n("p"),Ho=s(`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),Xo=c(),G=n("p"),jo=s("Similar to doing "),we=n("code"),Qo=s("self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),Zo=s("."),Jo=c(),re=n("div"),E(K.$$.fragment),this.h()},l(e){const d=Lt('[data-svelte="svelte-1phssyn"]',document.head);v=r(d,"META",{name:!0,content:!0}),d.forEach(t),ze=l(e),k=r(e,"H1",{class:!0});var Ne=a(k);w=r(Ne,"A",{id:!0,class:!0,href:!0});var et=a(w);se=r(et,"SPAN",{});var ot=a(se);q(B.$$.fragment,ot),ot.forEach(t),et.forEach(t),Je=l(Ne),ie=r(Ne,"SPAN",{});var tt=a(ie);Ge=i(tt,"Wav2Vec2Phoneme"),tt.forEach(t),Ne.forEach(t),Pe=l(e),b=r(e,"H2",{class:!0});var De=a(b);y=r(De,"A",{id:!0,class:!0,href:!0});var nt=a(y);ce=r(nt,"SPAN",{});var rt=a(ce);q(N.$$.fragment,rt),rt.forEach(t),nt.forEach(t),Ke=l(De),le=r(De,"SPAN",{});var at=a(le);Ye=i(at,"Overview"),at.forEach(t),De.forEach(t),xe=l(e),z=r(e,"P",{});var Se=a(z);eo=i(Se,"The Wav2Vec2Phoneme model was proposed in "),D=r(Se,"A",{href:!0,rel:!0});var st=a(D);oo=i(st,`Simple and Effective Zero-shot Cross-lingual Phoneme Recognition (Xu et al.,
2021`),st.forEach(t),to=i(Se," by Qiantong Xu, Alexei Baevski, Michael Auli."),Se.forEach(t),Ce=l(e),Y=r(e,"P",{});var it=a(Y);no=i(it,"The abstract from the paper is the following:"),it.forEach(t),We=l(e),ee=r(e,"P",{});var ct=a(ee);de=r(ct,"EM",{});var lt=a(de);ro=i(lt,`Recent progress in self-training, self-supervised pretraining and unsupervised learning enabled well performing speech
recognition systems without any labeled data. However, in many cases there is labeled data available for related
languages which is not utilized by these methods. This paper extends previous work on zero-shot cross-lingual transfer
learning by fine-tuning a multilingually pretrained wav2vec 2.0 model to transcribe unseen languages. This is done by
mapping phonemes of the training languages to the target language using articulatory features. Experiments show that
this simple method significantly outperforms prior work which introduced task-specific architectures and used only part
of a monolingually pretrained model.`),lt.forEach(t),ct.forEach(t),Ve=l(e),oe=r(e,"P",{});var dt=a(oe);ao=i(dt,"Tips:"),dt.forEach(t),$e=l(e),u=r(e,"UL",{});var g=a(u);pe=r(g,"LI",{});var pt=a(pe);so=i(pt,"Wav2Vec2Phoneme uses the exact same architecture as Wav2Vec2"),pt.forEach(t),io=l(g),he=r(g,"LI",{});var ht=a(he);co=i(ht,"Wav2Vec2Phoneme is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),ht.forEach(t),lo=l(g),S=r(g,"LI",{});var Re=a(S);po=i(Re,`Wav2Vec2Phoneme model was trained using connectionist temporal classification (CTC) so the model output has to be
decoded using `),te=r(Re,"A",{href:!0});var mt=a(te);ho=i(mt,"Wav2Vec2PhonemeCTCTokenizer"),mt.forEach(t),mo=i(Re,"."),Re.forEach(t),uo=l(g),me=r(g,"LI",{});var ut=a(me);fo=i(ut,`Wav2Vec2Phoneme can be fine-tuned on multiple language at once and decode unseen languages in a single forward pass
to a sequence of phonemes`),ut.forEach(t),_o=l(g),ue=r(g,"LI",{});var ft=a(ue);go=i(ft,`By default the model outputs a sequence of phonemes. In order to transform the phonemes to a sequence of words one
should make use of a dictionary and language model.`),ft.forEach(t),g.forEach(t),Ee=l(e),P=r(e,"P",{});var Oe=a(P);vo=i(Oe,"Relevant checkpoints can be found under "),R=r(Oe,"A",{href:!0,rel:!0});var _t=a(R);ko=i(_t,"https://huggingface.co/models?other=phoneme-recognition"),_t.forEach(t),bo=i(Oe,"."),Oe.forEach(t),qe=l(e),O=r(e,"P",{});var Go=a(O);To=i(Go,"This model was contributed by "),U=r(Go,"A",{href:!0,rel:!0});var gt=a(U);wo=i(gt,"patrickvonplaten"),gt.forEach(t),Go.forEach(t),Le=l(e),x=r(e,"P",{});var Ue=a(x);yo=i(Ue,"The original code can be found "),M=r(Ue,"A",{href:!0,rel:!0});var vt=a(M);zo=i(vt,"here"),vt.forEach(t),Po=i(Ue,"."),Ue.forEach(t),Fe=l(e),C=r(e,"P",{});var Me=a(C);xo=i(Me,"Wav2Vec2Phoneme\u2019s architecture is based on the Wav2Vec2 model, so one can refer to "),fe=r(Me,"CODE",{});var kt=a(fe);Co=i(kt,"Wav2Vec2"),kt.forEach(t),Wo=i(Me,"\u2019s documentation page except for the tokenizer."),Me.forEach(t),Ie=l(e),T=r(e,"H2",{class:!0});var He=a(T);W=r(He,"A",{id:!0,class:!0,href:!0});var bt=a(W);_e=r(bt,"SPAN",{});var Tt=a(_e);q(H.$$.fragment,Tt),Tt.forEach(t),bt.forEach(t),Vo=l(He),ge=r(He,"SPAN",{});var wt=a(ge);$o=i(wt,"Wav2Vec2PhonemeCTCTokenizer"),wt.forEach(t),He.forEach(t),Ae=l(e),m=r(e,"DIV",{class:!0});var f=a(m);q(X.$$.fragment,f),Eo=l(f),ve=r(f,"P",{});var yt=a(ve);qo=i(yt,"Constructs a Wav2Vec2PhonemeCTC tokenizer."),yt.forEach(t),Lo=l(f),j=r(f,"P",{});var Xe=a(j);Fo=i(Xe,"This tokenizer inherits from "),ne=r(Xe,"A",{href:!0});var zt=a(ne);Io=i(zt,"PreTrainedTokenizer"),zt.forEach(t),Ao=i(Xe,` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),Xe.forEach(t),Bo=l(f),V=r(f,"DIV",{class:!0});var je=a(V);q(Q.$$.fragment,je),No=l(je),ke=r(je,"P",{});var Pt=a(ke);Do=i(Pt,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences.`),Pt.forEach(t),je.forEach(t),So=l(f),$=r(f,"DIV",{class:!0});var Qe=a($);q(Z.$$.fragment,Qe),Ro=l(Qe),be=r(Qe,"P",{});var xt=a(be);Oo=i(xt,"Convert a list of lists of token ids into a list of strings by calling decode."),xt.forEach(t),Qe.forEach(t),Uo=l(f),_=r(f,"DIV",{class:!0});var ae=a(_);q(J.$$.fragment,ae),Mo=l(ae),Te=r(ae,"P",{});var Ct=a(Te);Ho=i(Ct,`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),Ct.forEach(t),Xo=l(ae),G=r(ae,"P",{});var Ze=a(G);jo=i(Ze,"Similar to doing "),we=r(Ze,"CODE",{});var Wt=a(we);Qo=i(Wt,"self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),Wt.forEach(t),Zo=i(Ze,"."),Ze.forEach(t),ae.forEach(t),Jo=l(f),re=r(f,"DIV",{class:!0});var Vt=a(re);q(K.$$.fragment,Vt),Vt.forEach(t),f.forEach(t),this.h()},h(){p(v,"name","hf:doc:metadata"),p(v,"content",JSON.stringify(Bt)),p(w,"id","wav2vec2phoneme"),p(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(w,"href","#wav2vec2phoneme"),p(k,"class","relative group"),p(y,"id","overview"),p(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(y,"href","#overview"),p(b,"class","relative group"),p(D,"href","https://arxiv.org/abs/2109.11680"),p(D,"rel","nofollow"),p(te,"href","/docs/transformers/pr_16450/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer"),p(R,"href","https://huggingface.co/models?other=phoneme-recognition"),p(R,"rel","nofollow"),p(U,"href","https://huggingface.co/patrickvonplaten"),p(U,"rel","nofollow"),p(M,"href","https://github.com/pytorch/fairseq/tree/master/fairseq/models/wav2vec"),p(M,"rel","nofollow"),p(W,"id","transformers.Wav2Vec2PhonemeCTCTokenizer"),p(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(W,"href","#transformers.Wav2Vec2PhonemeCTCTokenizer"),p(T,"class","relative group"),p(ne,"href","/docs/transformers/pr_16450/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),p(V,"class","docstring"),p($,"class","docstring"),p(_,"class","docstring"),p(re,"class","docstring"),p(m,"class","docstring")},m(e,d){o(document.head,v),h(e,ze,d),h(e,k,d),o(k,w),o(w,se),L(B,se,null),o(k,Je),o(k,ie),o(ie,Ge),h(e,Pe,d),h(e,b,d),o(b,y),o(y,ce),L(N,ce,null),o(b,Ke),o(b,le),o(le,Ye),h(e,xe,d),h(e,z,d),o(z,eo),o(z,D),o(D,oo),o(z,to),h(e,Ce,d),h(e,Y,d),o(Y,no),h(e,We,d),h(e,ee,d),o(ee,de),o(de,ro),h(e,Ve,d),h(e,oe,d),o(oe,ao),h(e,$e,d),h(e,u,d),o(u,pe),o(pe,so),o(u,io),o(u,he),o(he,co),o(u,lo),o(u,S),o(S,po),o(S,te),o(te,ho),o(S,mo),o(u,uo),o(u,me),o(me,fo),o(u,_o),o(u,ue),o(ue,go),h(e,Ee,d),h(e,P,d),o(P,vo),o(P,R),o(R,ko),o(P,bo),h(e,qe,d),h(e,O,d),o(O,To),o(O,U),o(U,wo),h(e,Le,d),h(e,x,d),o(x,yo),o(x,M),o(M,zo),o(x,Po),h(e,Fe,d),h(e,C,d),o(C,xo),o(C,fe),o(fe,Co),o(C,Wo),h(e,Ie,d),h(e,T,d),o(T,W),o(W,_e),L(H,_e,null),o(T,Vo),o(T,ge),o(ge,$o),h(e,Ae,d),h(e,m,d),L(X,m,null),o(m,Eo),o(m,ve),o(ve,qo),o(m,Lo),o(m,j),o(j,Fo),o(j,ne),o(ne,Io),o(j,Ao),o(m,Bo),o(m,V),L(Q,V,null),o(V,No),o(V,ke),o(ke,Do),o(m,So),o(m,$),L(Z,$,null),o($,Ro),o($,be),o(be,Oo),o(m,Uo),o(m,_),L(J,_,null),o(_,Mo),o(_,Te),o(Te,Ho),o(_,Xo),o(_,G),o(G,jo),o(G,we),o(we,Qo),o(G,Zo),o(m,Jo),o(m,re),L(K,re,null),Be=!0},p:Ft,i(e){Be||(F(B.$$.fragment,e),F(N.$$.fragment,e),F(H.$$.fragment,e),F(X.$$.fragment,e),F(Q.$$.fragment,e),F(Z.$$.fragment,e),F(J.$$.fragment,e),F(K.$$.fragment,e),Be=!0)},o(e){I(B.$$.fragment,e),I(N.$$.fragment,e),I(H.$$.fragment,e),I(X.$$.fragment,e),I(Q.$$.fragment,e),I(Z.$$.fragment,e),I(J.$$.fragment,e),I(K.$$.fragment,e),Be=!1},d(e){t(v),e&&t(ze),e&&t(k),A(B),e&&t(Pe),e&&t(b),A(N),e&&t(xe),e&&t(z),e&&t(Ce),e&&t(Y),e&&t(We),e&&t(ee),e&&t(Ve),e&&t(oe),e&&t($e),e&&t(u),e&&t(Ee),e&&t(P),e&&t(qe),e&&t(O),e&&t(Le),e&&t(x),e&&t(Fe),e&&t(C),e&&t(Ie),e&&t(T),A(H),e&&t(Ae),e&&t(m),A(X),A(Q),A(Z),A(J),A(K)}}}const Bt={local:"wav2vec2phoneme",sections:[{local:"overview",title:"Overview"},{local:"transformers.Wav2Vec2PhonemeCTCTokenizer",title:"Wav2Vec2PhonemeCTCTokenizer"}],title:"Wav2Vec2Phoneme"};function Nt(Yo){return It(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ot extends $t{constructor(v){super();Et(this,v,Nt,At,qt,{})}}export{Ot as default,Bt as metadata};
