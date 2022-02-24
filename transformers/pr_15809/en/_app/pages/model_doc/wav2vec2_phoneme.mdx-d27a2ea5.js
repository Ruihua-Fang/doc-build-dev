import{S as Wt,i as Et,s as Vt,e as n,k as c,w as X,t as s,L as qt,c as r,d as t,m as l,a,x as j,h as i,b as p,J as o,g as h,y as J,K as $t,q as Q,o as Z,B as K}from"../../chunks/vendor-9e2b328e.js";import{D as Je}from"../../chunks/Docstring-50fd6873.js";import{I as Go}from"../../chunks/IconCopyLink-fd0e58fd.js";function Lt(Qe){let v,G,_,g,ae,q,Ze,se,Ke,ye,T,y,ie,$,Ge,ce,Ye,ze,z,eo,L,oo,to,Pe,Y,no,xe,ee,le,ro,Ce,oe,ao,We,u,de,so,io,pe,co,lo,F,po,te,ho,mo,uo,he,fo,_o,me,go,Ee,P,vo,I,ko,bo,Ve,A,To,B,wo,qe,x,yo,N,zo,Po,$e,C,xo,ue,Co,Wo,Le,w,W,fe,D,Eo,_e,Vo,Fe,m,S,qo,ge,$o,Lo,R,Fo,ne,Io,Ao,Bo,E,O,No,ve,Do,So,V,U,Ro,ke,Oo,Uo,k,M,Mo,be,Ho,Xo,H,jo,Te,Jo,Qo,Zo,we,Ie;return q=new Go({}),$=new Go({}),D=new Go({}),S=new Je({props:{name:"class transformers.Wav2Vec2PhonemeCTCTokenizer",anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"phone_delimiter_token",val:" = ' '"},{name:"word_delimiter_token",val:" = None"},{name:"do_phonemize",val:" = True"},{name:"phonemizer_lang",val:" = 'en-us'"},{name:"phonemizer_backend",val:" = 'espeak'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15809/src/transformers/models/wav2vec2_phoneme/tokenization_wav2vec2_phoneme.py#L87",parametersDescription:[{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Additional keyword arguments passed along to <a href="/docs/transformers/pr_15809/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"phonemizer_backend"}]}}),O=new Je({props:{name:"__call__",anchor:"transformers.PreTrainedTokenizerBase.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.file_utils.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"is_split_into_words",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.file_utils.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15809/src/transformers/tokenization_utils_base.py#L2379",parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string or a list of strings
(pretokenized string). If the sequences are provided as list of strings (pretokenized), you must set
<code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.text_pair",description:`<strong>text_pair</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string or a list of strings
(pretokenized string). If the sequences are provided as list of strings (pretokenized), you must set
<code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text_pair"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_15809/en/internal/file_utils#transformers.file_utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_15809/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_15809/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
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
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/pr_15809/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.PreTrainedTokenizerBase.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15809/en/main_classes/tokenizer#transformers.BatchEncoding"
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
  href="/docs/transformers/pr_15809/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),U=new Je({props:{name:"batch_decode",anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.batch_decode",parameters:[{name:"sequences",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"output_char_offsets",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15809/src/transformers/models/wav2vec2_phoneme/tokenization_wav2vec2_phoneme.py#L486",parametersDescription:[{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.batch_decode.sequences",description:`<strong>sequences</strong> (<code>Union[List[int], List[List[int]], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
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
`}}),M=new Je({props:{name:"decode",anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.decode",parameters:[{name:"token_ids",val:": typing.Union[int, typing.List[int], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"output_char_offsets",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15809/src/transformers/models/wav2vec2_phoneme/tokenization_wav2vec2_phoneme.py#L430",parametersDescription:[{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.decode.token_ids",description:`<strong>token_ids</strong> (<code>Union[int, List[int], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
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
`}}),{c(){v=n("meta"),G=c(),_=n("h1"),g=n("a"),ae=n("span"),X(q.$$.fragment),Ze=c(),se=n("span"),Ke=s("Wav2Vec2Phoneme"),ye=c(),T=n("h2"),y=n("a"),ie=n("span"),X($.$$.fragment),Ge=c(),ce=n("span"),Ye=s("Overview"),ze=c(),z=n("p"),eo=s("The Wav2Vec2Phoneme model was proposed in "),L=n("a"),oo=s(`Simple and Effective Zero-shot Cross-lingual Phoneme Recognition (Xu et al.,
2021`),to=s(" by Qiantong Xu, Alexei Baevski, Michael Auli."),Pe=c(),Y=n("p"),no=s("The abstract from the paper is the following:"),xe=c(),ee=n("p"),le=n("em"),ro=s(`Recent progress in self-training, self-supervised pretraining and unsupervised learning enabled well performing speech
recognition systems without any labeled data. However, in many cases there is labeled data available for related
languages which is not utilized by these methods. This paper extends previous work on zero-shot cross-lingual transfer
learning by fine-tuning a multilingually pretrained wav2vec 2.0 model to transcribe unseen languages. This is done by
mapping phonemes of the training languages to the target language using articulatory features. Experiments show that
this simple method significantly outperforms prior work which introduced task-specific architectures and used only part
of a monolingually pretrained model.`),Ce=c(),oe=n("p"),ao=s("Tips:"),We=c(),u=n("ul"),de=n("li"),so=s("Wav2Vec2Phoneme uses the exact same architecture as Wav2Vec2"),io=c(),pe=n("li"),co=s("Wav2Vec2Phoneme is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),lo=c(),F=n("li"),po=s(`Wav2Vec2Phoneme model was trained using connectionist temporal classification (CTC) so the model output has to be
decoded using `),te=n("a"),ho=s("Wav2Vec2PhonemeCTCTokenizer"),mo=s("."),uo=c(),he=n("li"),fo=s(`Wav2Vec2Phoneme can be fine-tuned on multiple language at once and decode unseen languages in a single forward pass
to a sequence of phonemes`),_o=c(),me=n("li"),go=s(`By default the model outputs a sequence of phonemes. In order to transform the phonemes to a sequence of words one
should make use of a dictionary and language model.`),Ee=c(),P=n("p"),vo=s("Relevant checkpoints can be found under "),I=n("a"),ko=s("https://huggingface.co/models?other=phoneme-recognition"),bo=s("."),Ve=c(),A=n("p"),To=s("This model was contributed by "),B=n("a"),wo=s("patrickvonplaten"),qe=c(),x=n("p"),yo=s("The original code can be found "),N=n("a"),zo=s("here"),Po=s("."),$e=c(),C=n("p"),xo=s("Wav2Vec2Phoneme\u2019s architecture is based on the Wav2Vec2 model, so one can refer to "),ue=n("code"),Co=s("Wav2Vec2"),Wo=s("\u2019s documentation page except for the tokenizer."),Le=c(),w=n("h2"),W=n("a"),fe=n("span"),X(D.$$.fragment),Eo=c(),_e=n("span"),Vo=s("Wav2Vec2PhonemeCTCTokenizer"),Fe=c(),m=n("div"),X(S.$$.fragment),qo=c(),ge=n("p"),$o=s("Constructs a Wav2Vec2PhonemeCTC tokenizer."),Lo=c(),R=n("p"),Fo=s("This tokenizer inherits from "),ne=n("a"),Io=s("PreTrainedTokenizer"),Ao=s(` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),Bo=c(),E=n("div"),X(O.$$.fragment),No=c(),ve=n("p"),Do=s(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences.`),So=c(),V=n("div"),X(U.$$.fragment),Ro=c(),ke=n("p"),Oo=s("Convert a list of lists of token ids into a list of strings by calling decode."),Uo=c(),k=n("div"),X(M.$$.fragment),Mo=c(),be=n("p"),Ho=s(`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),Xo=c(),H=n("p"),jo=s("Similar to doing "),Te=n("code"),Jo=s("self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),Qo=s("."),Zo=c(),we=n("div"),this.h()},l(e){const d=qt('[data-svelte="svelte-1phssyn"]',document.head);v=r(d,"META",{name:!0,content:!0}),d.forEach(t),G=l(e),_=r(e,"H1",{class:!0});var Ae=a(_);g=r(Ae,"A",{id:!0,class:!0,href:!0});var Yo=a(g);ae=r(Yo,"SPAN",{});var et=a(ae);j(q.$$.fragment,et),et.forEach(t),Yo.forEach(t),Ze=l(Ae),se=r(Ae,"SPAN",{});var ot=a(se);Ke=i(ot,"Wav2Vec2Phoneme"),ot.forEach(t),Ae.forEach(t),ye=l(e),T=r(e,"H2",{class:!0});var Be=a(T);y=r(Be,"A",{id:!0,class:!0,href:!0});var tt=a(y);ie=r(tt,"SPAN",{});var nt=a(ie);j($.$$.fragment,nt),nt.forEach(t),tt.forEach(t),Ge=l(Be),ce=r(Be,"SPAN",{});var rt=a(ce);Ye=i(rt,"Overview"),rt.forEach(t),Be.forEach(t),ze=l(e),z=r(e,"P",{});var Ne=a(z);eo=i(Ne,"The Wav2Vec2Phoneme model was proposed in "),L=r(Ne,"A",{href:!0,rel:!0});var at=a(L);oo=i(at,`Simple and Effective Zero-shot Cross-lingual Phoneme Recognition (Xu et al.,
2021`),at.forEach(t),to=i(Ne," by Qiantong Xu, Alexei Baevski, Michael Auli."),Ne.forEach(t),Pe=l(e),Y=r(e,"P",{});var st=a(Y);no=i(st,"The abstract from the paper is the following:"),st.forEach(t),xe=l(e),ee=r(e,"P",{});var it=a(ee);le=r(it,"EM",{});var ct=a(le);ro=i(ct,`Recent progress in self-training, self-supervised pretraining and unsupervised learning enabled well performing speech
recognition systems without any labeled data. However, in many cases there is labeled data available for related
languages which is not utilized by these methods. This paper extends previous work on zero-shot cross-lingual transfer
learning by fine-tuning a multilingually pretrained wav2vec 2.0 model to transcribe unseen languages. This is done by
mapping phonemes of the training languages to the target language using articulatory features. Experiments show that
this simple method significantly outperforms prior work which introduced task-specific architectures and used only part
of a monolingually pretrained model.`),ct.forEach(t),it.forEach(t),Ce=l(e),oe=r(e,"P",{});var lt=a(oe);ao=i(lt,"Tips:"),lt.forEach(t),We=l(e),u=r(e,"UL",{});var b=a(u);de=r(b,"LI",{});var dt=a(de);so=i(dt,"Wav2Vec2Phoneme uses the exact same architecture as Wav2Vec2"),dt.forEach(t),io=l(b),pe=r(b,"LI",{});var pt=a(pe);co=i(pt,"Wav2Vec2Phoneme is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),pt.forEach(t),lo=l(b),F=r(b,"LI",{});var De=a(F);po=i(De,`Wav2Vec2Phoneme model was trained using connectionist temporal classification (CTC) so the model output has to be
decoded using `),te=r(De,"A",{href:!0});var ht=a(te);ho=i(ht,"Wav2Vec2PhonemeCTCTokenizer"),ht.forEach(t),mo=i(De,"."),De.forEach(t),uo=l(b),he=r(b,"LI",{});var mt=a(he);fo=i(mt,`Wav2Vec2Phoneme can be fine-tuned on multiple language at once and decode unseen languages in a single forward pass
to a sequence of phonemes`),mt.forEach(t),_o=l(b),me=r(b,"LI",{});var ut=a(me);go=i(ut,`By default the model outputs a sequence of phonemes. In order to transform the phonemes to a sequence of words one
should make use of a dictionary and language model.`),ut.forEach(t),b.forEach(t),Ee=l(e),P=r(e,"P",{});var Se=a(P);vo=i(Se,"Relevant checkpoints can be found under "),I=r(Se,"A",{href:!0,rel:!0});var ft=a(I);ko=i(ft,"https://huggingface.co/models?other=phoneme-recognition"),ft.forEach(t),bo=i(Se,"."),Se.forEach(t),Ve=l(e),A=r(e,"P",{});var Ko=a(A);To=i(Ko,"This model was contributed by "),B=r(Ko,"A",{href:!0,rel:!0});var _t=a(B);wo=i(_t,"patrickvonplaten"),_t.forEach(t),Ko.forEach(t),qe=l(e),x=r(e,"P",{});var Re=a(x);yo=i(Re,"The original code can be found "),N=r(Re,"A",{href:!0,rel:!0});var gt=a(N);zo=i(gt,"here"),gt.forEach(t),Po=i(Re,"."),Re.forEach(t),$e=l(e),C=r(e,"P",{});var Oe=a(C);xo=i(Oe,"Wav2Vec2Phoneme\u2019s architecture is based on the Wav2Vec2 model, so one can refer to "),ue=r(Oe,"CODE",{});var vt=a(ue);Co=i(vt,"Wav2Vec2"),vt.forEach(t),Wo=i(Oe,"\u2019s documentation page except for the tokenizer."),Oe.forEach(t),Le=l(e),w=r(e,"H2",{class:!0});var Ue=a(w);W=r(Ue,"A",{id:!0,class:!0,href:!0});var kt=a(W);fe=r(kt,"SPAN",{});var bt=a(fe);j(D.$$.fragment,bt),bt.forEach(t),kt.forEach(t),Eo=l(Ue),_e=r(Ue,"SPAN",{});var Tt=a(_e);Vo=i(Tt,"Wav2Vec2PhonemeCTCTokenizer"),Tt.forEach(t),Ue.forEach(t),Fe=l(e),m=r(e,"DIV",{class:!0});var f=a(m);j(S.$$.fragment,f),qo=l(f),ge=r(f,"P",{});var wt=a(ge);$o=i(wt,"Constructs a Wav2Vec2PhonemeCTC tokenizer."),wt.forEach(t),Lo=l(f),R=r(f,"P",{});var Me=a(R);Fo=i(Me,"This tokenizer inherits from "),ne=r(Me,"A",{href:!0});var yt=a(ne);Io=i(yt,"PreTrainedTokenizer"),yt.forEach(t),Ao=i(Me,` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),Me.forEach(t),Bo=l(f),E=r(f,"DIV",{class:!0});var He=a(E);j(O.$$.fragment,He),No=l(He),ve=r(He,"P",{});var zt=a(ve);Do=i(zt,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences.`),zt.forEach(t),He.forEach(t),So=l(f),V=r(f,"DIV",{class:!0});var Xe=a(V);j(U.$$.fragment,Xe),Ro=l(Xe),ke=r(Xe,"P",{});var Pt=a(ke);Oo=i(Pt,"Convert a list of lists of token ids into a list of strings by calling decode."),Pt.forEach(t),Xe.forEach(t),Uo=l(f),k=r(f,"DIV",{class:!0});var re=a(k);j(M.$$.fragment,re),Mo=l(re),be=r(re,"P",{});var xt=a(be);Ho=i(xt,`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),xt.forEach(t),Xo=l(re),H=r(re,"P",{});var je=a(H);jo=i(je,"Similar to doing "),Te=r(je,"CODE",{});var Ct=a(Te);Jo=i(Ct,"self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),Ct.forEach(t),Qo=i(je,"."),je.forEach(t),re.forEach(t),Zo=l(f),we=r(f,"DIV",{class:!0}),a(we).forEach(t),f.forEach(t),this.h()},h(){p(v,"name","hf:doc:metadata"),p(v,"content",JSON.stringify(Ft)),p(g,"id","wav2vec2phoneme"),p(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(g,"href","#wav2vec2phoneme"),p(_,"class","relative group"),p(y,"id","overview"),p(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(y,"href","#overview"),p(T,"class","relative group"),p(L,"href","https://arxiv.org/abs/2109.11680"),p(L,"rel","nofollow"),p(te,"href","/docs/transformers/pr_15809/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer"),p(I,"href","https://huggingface.co/models?other=phoneme-recognition"),p(I,"rel","nofollow"),p(B,"href","https://huggingface.co/patrickvonplaten"),p(B,"rel","nofollow"),p(N,"href","https://github.com/pytorch/fairseq/tree/master/fairseq/models/wav2vec"),p(N,"rel","nofollow"),p(W,"id","transformers.Wav2Vec2PhonemeCTCTokenizer"),p(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(W,"href","#transformers.Wav2Vec2PhonemeCTCTokenizer"),p(w,"class","relative group"),p(ne,"href","/docs/transformers/pr_15809/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),p(E,"class","docstring"),p(V,"class","docstring"),p(k,"class","docstring"),p(we,"class","docstring"),p(m,"class","docstring")},m(e,d){o(document.head,v),h(e,G,d),h(e,_,d),o(_,g),o(g,ae),J(q,ae,null),o(_,Ze),o(_,se),o(se,Ke),h(e,ye,d),h(e,T,d),o(T,y),o(y,ie),J($,ie,null),o(T,Ge),o(T,ce),o(ce,Ye),h(e,ze,d),h(e,z,d),o(z,eo),o(z,L),o(L,oo),o(z,to),h(e,Pe,d),h(e,Y,d),o(Y,no),h(e,xe,d),h(e,ee,d),o(ee,le),o(le,ro),h(e,Ce,d),h(e,oe,d),o(oe,ao),h(e,We,d),h(e,u,d),o(u,de),o(de,so),o(u,io),o(u,pe),o(pe,co),o(u,lo),o(u,F),o(F,po),o(F,te),o(te,ho),o(F,mo),o(u,uo),o(u,he),o(he,fo),o(u,_o),o(u,me),o(me,go),h(e,Ee,d),h(e,P,d),o(P,vo),o(P,I),o(I,ko),o(P,bo),h(e,Ve,d),h(e,A,d),o(A,To),o(A,B),o(B,wo),h(e,qe,d),h(e,x,d),o(x,yo),o(x,N),o(N,zo),o(x,Po),h(e,$e,d),h(e,C,d),o(C,xo),o(C,ue),o(ue,Co),o(C,Wo),h(e,Le,d),h(e,w,d),o(w,W),o(W,fe),J(D,fe,null),o(w,Eo),o(w,_e),o(_e,Vo),h(e,Fe,d),h(e,m,d),J(S,m,null),o(m,qo),o(m,ge),o(ge,$o),o(m,Lo),o(m,R),o(R,Fo),o(R,ne),o(ne,Io),o(R,Ao),o(m,Bo),o(m,E),J(O,E,null),o(E,No),o(E,ve),o(ve,Do),o(m,So),o(m,V),J(U,V,null),o(V,Ro),o(V,ke),o(ke,Oo),o(m,Uo),o(m,k),J(M,k,null),o(k,Mo),o(k,be),o(be,Ho),o(k,Xo),o(k,H),o(H,jo),o(H,Te),o(Te,Jo),o(H,Qo),o(m,Zo),o(m,we),Ie=!0},p:$t,i(e){Ie||(Q(q.$$.fragment,e),Q($.$$.fragment,e),Q(D.$$.fragment,e),Q(S.$$.fragment,e),Q(O.$$.fragment,e),Q(U.$$.fragment,e),Q(M.$$.fragment,e),Ie=!0)},o(e){Z(q.$$.fragment,e),Z($.$$.fragment,e),Z(D.$$.fragment,e),Z(S.$$.fragment,e),Z(O.$$.fragment,e),Z(U.$$.fragment,e),Z(M.$$.fragment,e),Ie=!1},d(e){t(v),e&&t(G),e&&t(_),K(q),e&&t(ye),e&&t(T),K($),e&&t(ze),e&&t(z),e&&t(Pe),e&&t(Y),e&&t(xe),e&&t(ee),e&&t(Ce),e&&t(oe),e&&t(We),e&&t(u),e&&t(Ee),e&&t(P),e&&t(Ve),e&&t(A),e&&t(qe),e&&t(x),e&&t($e),e&&t(C),e&&t(Le),e&&t(w),K(D),e&&t(Fe),e&&t(m),K(S),K(O),K(U),K(M)}}}const Ft={local:"wav2vec2phoneme",sections:[{local:"overview",title:"Overview"},{local:"transformers.Wav2Vec2PhonemeCTCTokenizer",title:"Wav2Vec2PhonemeCTCTokenizer"}],title:"Wav2Vec2Phoneme"};function It(Qe,v,G){let{fw:_}=v;return Qe.$$set=g=>{"fw"in g&&G(0,_=g.fw)},[_]}class Dt extends Wt{constructor(v){super();Et(this,v,It,Lt,Vt,{fw:0})}}export{Dt as default,Ft as metadata};
