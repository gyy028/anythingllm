const MODELS = {
  "nousresearch/nous-capybara-34b": {
    id: "nousresearch/nous-capybara-34b",
    name: "Nous: Capybara 34B",
    maxLength: 32768,
  },
  "openrouter/auto": {
    id: "openrouter/auto",
    name: "Auto (best for prompt)",
    maxLength: 128000,
  },
  "nousresearch/nous-capybara-7b:free": {
    id: "nousresearch/nous-capybara-7b:free",
    name: "Nous: Capybara 7B (free)",
    maxLength: 4096,
  },
  "mistralai/mistral-7b-instruct:free": {
    id: "mistralai/mistral-7b-instruct:free",
    name: "Mistral 7B Instruct (free)",
    maxLength: 8192,
  },
  "gryphe/mythomist-7b:free": {
    id: "gryphe/mythomist-7b:free",
    name: "MythoMist 7B (free)",
    maxLength: 32768,
  },
  "undi95/toppy-m-7b:free": {
    id: "undi95/toppy-m-7b:free",
    name: "Toppy M 7B (free)",
    maxLength: 4096,
  },
  "openrouter/cinematika-7b:free": {
    id: "openrouter/cinematika-7b:free",
    name: "Cinematika 7B (alpha) (free)",
    maxLength: 8000,
  },
  "google/gemma-7b-it:free": {
    id: "google/gemma-7b-it:free",
    name: "Google: Gemma 7B (free)",
    maxLength: 8000,
  },
  "jondurbin/bagel-34b": {
    id: "jondurbin/bagel-34b",
    name: "Bagel 34B v0.2",
    maxLength: 8000,
  },
  "jebcarter/psyfighter-13b": {
    id: "jebcarter/psyfighter-13b",
    name: "Psyfighter 13B",
    maxLength: 4096,
  },
  "koboldai/psyfighter-13b-2": {
    id: "koboldai/psyfighter-13b-2",
    name: "Psyfighter v2 13B",
    maxLength: 4096,
  },
  "neversleep/noromaid-mixtral-8x7b-instruct": {
    id: "neversleep/noromaid-mixtral-8x7b-instruct",
    name: "Noromaid Mixtral 8x7B Instruct",
    maxLength: 8000,
  },
  "nousresearch/nous-hermes-llama2-13b": {
    id: "nousresearch/nous-hermes-llama2-13b",
    name: "Nous: Hermes 13B",
    maxLength: 4096,
  },
  "meta-llama/codellama-34b-instruct": {
    id: "meta-llama/codellama-34b-instruct",
    name: "Meta: CodeLlama 34B Instruct",
    maxLength: 8192,
  },
  "phind/phind-codellama-34b": {
    id: "phind/phind-codellama-34b",
    name: "Phind: CodeLlama 34B v2",
    maxLength: 4096,
  },
  "intel/neural-chat-7b": {
    id: "intel/neural-chat-7b",
    name: "Neural Chat 7B v3.1",
    maxLength: 4096,
  },
  "mistralai/mixtral-8x7b-instruct": {
    id: "mistralai/mixtral-8x7b-instruct",
    name: "Mistral: Mixtral 8x7B Instruct",
    maxLength: 32768,
  },
  "nousresearch/nous-hermes-2-mixtral-8x7b-dpo": {
    id: "nousresearch/nous-hermes-2-mixtral-8x7b-dpo",
    name: "Nous: Hermes 2 Mixtral 8x7B DPO",
    maxLength: 32000,
  },
  "nousresearch/nous-hermes-2-mixtral-8x7b-sft": {
    id: "nousresearch/nous-hermes-2-mixtral-8x7b-sft",
    name: "Nous: Hermes 2 Mixtral 8x7B SFT",
    maxLength: 32000,
  },
  "haotian-liu/llava-13b": {
    id: "haotian-liu/llava-13b",
    name: "Llava 13B",
    maxLength: 2048,
  },
  "nousresearch/nous-hermes-2-vision-7b": {
    id: "nousresearch/nous-hermes-2-vision-7b",
    name: "Nous: Hermes 2 Vision 7B (alpha)",
    maxLength: 4096,
  },
  "meta-llama/llama-2-13b-chat": {
    id: "meta-llama/llama-2-13b-chat",
    name: "Meta: Llama v2 13B Chat",
    maxLength: 4096,
  },
  "migtissera/synthia-70b": {
    id: "migtissera/synthia-70b",
    name: "Synthia 70B",
    maxLength: 8192,
  },
  "pygmalionai/mythalion-13b": {
    id: "pygmalionai/mythalion-13b",
    name: "Pygmalion: Mythalion 13B",
    maxLength: 8192,
  },
  "undi95/remm-slerp-l2-13b-6k": {
    id: "undi95/remm-slerp-l2-13b-6k",
    name: "ReMM SLERP 13B 6k",
    maxLength: 6144,
  },
  "gryphe/mythomax-l2-13b": {
    id: "gryphe/mythomax-l2-13b",
    name: "MythoMax 13B",
    maxLength: 4096,
  },
  "xwin-lm/xwin-lm-70b": {
    id: "xwin-lm/xwin-lm-70b",
    name: "Xwin 70B",
    maxLength: 8192,
  },
  "gryphe/mythomax-l2-13b-8k": {
    id: "gryphe/mythomax-l2-13b-8k",
    name: "MythoMax 13B 8k",
    maxLength: 8192,
  },
  "alpindale/goliath-120b": {
    id: "alpindale/goliath-120b",
    name: "Goliath 120B",
    maxLength: 6144,
  },
  "neversleep/noromaid-20b": {
    id: "neversleep/noromaid-20b",
    name: "Noromaid 20B",
    maxLength: 8192,
  },
  "gryphe/mythomist-7b": {
    id: "gryphe/mythomist-7b",
    name: "MythoMist 7B",
    maxLength: 32768,
  },
  "mancer/weaver": {
    id: "mancer/weaver",
    name: "Mancer: Weaver (alpha)",
    maxLength: 8000,
  },
  "nousresearch/nous-hermes-llama2-70b": {
    id: "nousresearch/nous-hermes-llama2-70b",
    name: "Nous: Hermes 70B",
    maxLength: 4096,
  },
  "nousresearch/nous-capybara-7b": {
    id: "nousresearch/nous-capybara-7b",
    name: "Nous: Capybara 7B",
    maxLength: 4096,
  },
  "codellama/codellama-70b-instruct": {
    id: "codellama/codellama-70b-instruct",
    name: "Meta: CodeLlama 70B Instruct",
    maxLength: 2048,
  },
  "teknium/openhermes-2-mistral-7b": {
    id: "teknium/openhermes-2-mistral-7b",
    name: "OpenHermes 2 Mistral 7B",
    maxLength: 4096,
  },
  "teknium/openhermes-2.5-mistral-7b": {
    id: "teknium/openhermes-2.5-mistral-7b",
    name: "OpenHermes 2.5 Mistral 7B",
    maxLength: 4096,
  },
  "undi95/remm-slerp-l2-13b": {
    id: "undi95/remm-slerp-l2-13b",
    name: "ReMM SLERP 13B",
    maxLength: 4096,
  },
  "undi95/toppy-m-7b": {
    id: "undi95/toppy-m-7b",
    name: "Toppy M 7B",
    maxLength: 4096,
  },
  "openrouter/cinematika-7b": {
    id: "openrouter/cinematika-7b",
    name: "Cinematika 7B (alpha)",
    maxLength: 8000,
  },
  "01-ai/yi-34b-chat": {
    id: "01-ai/yi-34b-chat",
    name: "Yi 34B Chat",
    maxLength: 4096,
  },
  "01-ai/yi-34b": {
    id: "01-ai/yi-34b",
    name: "Yi 34B (base)",
    maxLength: 4096,
  },
  "01-ai/yi-6b": {
    id: "01-ai/yi-6b",
    name: "Yi 6B (base)",
    maxLength: 4096,
  },
  "togethercomputer/stripedhyena-nous-7b": {
    id: "togethercomputer/stripedhyena-nous-7b",
    name: "StripedHyena Nous 7B",
    maxLength: 32768,
  },
  "togethercomputer/stripedhyena-hessian-7b": {
    id: "togethercomputer/stripedhyena-hessian-7b",
    name: "StripedHyena Hessian 7B (base)",
    maxLength: 32768,
  },
  "mistralai/mixtral-8x7b": {
    id: "mistralai/mixtral-8x7b",
    name: "Mistral: Mixtral 8x7B (base)",
    maxLength: 32768,
  },
  "nousresearch/nous-hermes-yi-34b": {
    id: "nousresearch/nous-hermes-yi-34b",
    name: "Nous: Hermes 2 Yi 34B",
    maxLength: 4096,
  },
  "nousresearch/nous-hermes-2-mistral-7b-dpo": {
    id: "nousresearch/nous-hermes-2-mistral-7b-dpo",
    name: "Nous: Hermes 2 Mistral 7B DPO",
    maxLength: 8192,
  },
  "open-orca/mistral-7b-openorca": {
    id: "open-orca/mistral-7b-openorca",
    name: "Mistral OpenOrca 7B",
    maxLength: 8192,
  },
  "huggingfaceh4/zephyr-7b-beta": {
    id: "huggingfaceh4/zephyr-7b-beta",
    name: "Hugging Face: Zephyr 7B",
    maxLength: 4096,
  },
  "openai/gpt-3.5-turbo": {
    id: "openai/gpt-3.5-turbo",
    name: "OpenAI: GPT-3.5 Turbo",
    maxLength: 4095,
  },
  "openai/gpt-3.5-turbo-0125": {
    id: "openai/gpt-3.5-turbo-0125",
    name: "OpenAI: GPT-3.5 Turbo 16k",
    maxLength: 16385,
  },
  "openai/gpt-3.5-turbo-1106": {
    id: "openai/gpt-3.5-turbo-1106",
    name: "OpenAI: GPT-3.5 Turbo 16k (older v1106)",
    maxLength: 16385,
  },
  "openai/gpt-3.5-turbo-0613": {
    id: "openai/gpt-3.5-turbo-0613",
    name: "OpenAI: GPT-3.5 Turbo (older v0613)",
    maxLength: 4095,
  },
  "openai/gpt-3.5-turbo-0301": {
    id: "openai/gpt-3.5-turbo-0301",
    name: "OpenAI: GPT-3.5 Turbo (older v0301)",
    maxLength: 4095,
  },
  "openai/gpt-3.5-turbo-16k": {
    id: "openai/gpt-3.5-turbo-16k",
    name: "OpenAI: GPT-3.5 Turbo 16k",
    maxLength: 16385,
  },
  "openai/gpt-4-turbo-preview": {
    id: "openai/gpt-4-turbo-preview",
    name: "OpenAI: GPT-4 Turbo (preview)",
    maxLength: 128000,
  },
  "openai/gpt-4-1106-preview": {
    id: "openai/gpt-4-1106-preview",
    name: "OpenAI: GPT-4 Turbo (older v1106)",
    maxLength: 128000,
  },
  "openai/gpt-4": {
    id: "openai/gpt-4",
    name: "OpenAI: GPT-4",
    maxLength: 8191,
  },
  "openai/gpt-4-0314": {
    id: "openai/gpt-4-0314",
    name: "OpenAI: GPT-4 (older v0314)",
    maxLength: 8191,
  },
  "openai/gpt-4-32k": {
    id: "openai/gpt-4-32k",
    name: "OpenAI: GPT-4 32k",
    maxLength: 32767,
  },
  "openai/gpt-4-32k-0314": {
    id: "openai/gpt-4-32k-0314",
    name: "OpenAI: GPT-4 32k (older v0314)",
    maxLength: 32767,
  },
  "openai/gpt-4-vision-preview": {
    id: "openai/gpt-4-vision-preview",
    name: "OpenAI: GPT-4 Vision (preview)",
    maxLength: 128000,
  },
  "openai/gpt-3.5-turbo-instruct": {
    id: "openai/gpt-3.5-turbo-instruct",
    name: "OpenAI: GPT-3.5 Turbo Instruct",
    maxLength: 4095,
  },
  "google/palm-2-chat-bison": {
    id: "google/palm-2-chat-bison",
    name: "Google: PaLM 2 Chat",
    maxLength: 36864,
  },
  "google/palm-2-codechat-bison": {
    id: "google/palm-2-codechat-bison",
    name: "Google: PaLM 2 Code Chat",
    maxLength: 28672,
  },
  "google/palm-2-chat-bison-32k": {
    id: "google/palm-2-chat-bison-32k",
    name: "Google: PaLM 2 Chat 32k",
    maxLength: 131072,
  },
  "google/palm-2-codechat-bison-32k": {
    id: "google/palm-2-codechat-bison-32k",
    name: "Google: PaLM 2 Code Chat 32k",
    maxLength: 131072,
  },
  "google/gemini-pro": {
    id: "google/gemini-pro",
    name: "Google: Gemini Pro (preview)",
    maxLength: 131040,
  },
  "google/gemini-pro-vision": {
    id: "google/gemini-pro-vision",
    name: "Google: Gemini Pro Vision (preview)",
    maxLength: 65536,
  },
  "perplexity/pplx-70b-online": {
    id: "perplexity/pplx-70b-online",
    name: "Perplexity: PPLX 70B Online",
    maxLength: 4096,
  },
  "perplexity/pplx-7b-online": {
    id: "perplexity/pplx-7b-online",
    name: "Perplexity: PPLX 7B Online",
    maxLength: 4096,
  },
  "perplexity/pplx-7b-chat": {
    id: "perplexity/pplx-7b-chat",
    name: "Perplexity: PPLX 7B Chat",
    maxLength: 8192,
  },
  "perplexity/pplx-70b-chat": {
    id: "perplexity/pplx-70b-chat",
    name: "Perplexity: PPLX 70B Chat",
    maxLength: 4096,
  },
  "meta-llama/llama-2-70b-chat": {
    id: "meta-llama/llama-2-70b-chat",
    name: "Meta: Llama v2 70B Chat",
    maxLength: 4096,
  },
  "jondurbin/airoboros-l2-70b": {
    id: "jondurbin/airoboros-l2-70b",
    name: "Airoboros 70B",
    maxLength: 4096,
  },
  "austism/chronos-hermes-13b": {
    id: "austism/chronos-hermes-13b",
    name: "Chronos Hermes 13B v2",
    maxLength: 4096,
  },
  "mistralai/mistral-7b-instruct": {
    id: "mistralai/mistral-7b-instruct",
    name: "Mistral 7B Instruct",
    maxLength: 8192,
  },
  "openchat/openchat-7b": {
    id: "openchat/openchat-7b",
    name: "OpenChat 3.5",
    maxLength: 8192,
  },
  "lizpreciatior/lzlv-70b-fp16-hf": {
    id: "lizpreciatior/lzlv-70b-fp16-hf",
    name: "lzlv 70B",
    maxLength: 4096,
  },
  "cognitivecomputations/dolphin-mixtral-8x7b": {
    id: "cognitivecomputations/dolphin-mixtral-8x7b",
    name: "Dolphin 2.6 Mixtral 8x7B 🐬",
    maxLength: 32000,
  },
  "rwkv/rwkv-5-world-3b": {
    id: "rwkv/rwkv-5-world-3b",
    name: "RWKV v5 World 3B",
    maxLength: 10000,
  },
  "recursal/rwkv-5-3b-ai-town": {
    id: "recursal/rwkv-5-3b-ai-town",
    name: "RWKV v5 3B AI Town",
    maxLength: 10000,
  },
  "recursal/eagle-7b": {
    id: "recursal/eagle-7b",
    name: "RWKV v5: Eagle 7B",
    maxLength: 10000,
  },
  "google/gemma-7b-it": {
    id: "google/gemma-7b-it",
    name: "Google: Gemma 7B",
    maxLength: 8000,
  },
  "anthropic/claude-2": {
    id: "anthropic/claude-2",
    name: "Anthropic: Claude v2",
    maxLength: 200000,
  },
  "anthropic/claude-2.1": {
    id: "anthropic/claude-2.1",
    name: "Anthropic: Claude v2.1",
    maxLength: 200000,
  },
  "anthropic/claude-2.0": {
    id: "anthropic/claude-2.0",
    name: "Anthropic: Claude v2.0",
    maxLength: 100000,
  },
  "anthropic/claude-instant-1": {
    id: "anthropic/claude-instant-1",
    name: "Anthropic: Claude Instant v1",
    maxLength: 100000,
  },
  "anthropic/claude-instant-1.2": {
    id: "anthropic/claude-instant-1.2",
    name: "Anthropic: Claude Instant v1.2",
    maxLength: 100000,
  },
  "anthropic/claude-1": {
    id: "anthropic/claude-1",
    name: "Anthropic: Claude v1",
    maxLength: 100000,
  },
  "anthropic/claude-1.2": {
    id: "anthropic/claude-1.2",
    name: "Anthropic: Claude (older v1)",
    maxLength: 100000,
  },
  "anthropic/claude-instant-1.0": {
    id: "anthropic/claude-instant-1.0",
    name: "Anthropic: Claude Instant (older v1)",
    maxLength: 100000,
  },
  "anthropic/claude-instant-1.1": {
    id: "anthropic/claude-instant-1.1",
    name: "Anthropic: Claude Instant (older v1.1)",
    maxLength: 100000,
  },
  "anthropic/claude-2:beta": {
    id: "anthropic/claude-2:beta",
    name: "Anthropic: Claude v2 (experimental)",
    maxLength: 200000,
  },
  "anthropic/claude-2.1:beta": {
    id: "anthropic/claude-2.1:beta",
    name: "Anthropic: Claude v2.1 (experimental)",
    maxLength: 200000,
  },
  "anthropic/claude-2.0:beta": {
    id: "anthropic/claude-2.0:beta",
    name: "Anthropic: Claude v2.0 (experimental)",
    maxLength: 100000,
  },
  "anthropic/claude-instant-1:beta": {
    id: "anthropic/claude-instant-1:beta",
    name: "Anthropic: Claude Instant v1 (experimental)",
    maxLength: 100000,
  },
  "huggingfaceh4/zephyr-7b-beta:free": {
    id: "huggingfaceh4/zephyr-7b-beta:free",
    name: "Hugging Face: Zephyr 7B (free)",
    maxLength: 4096,
  },
  "openchat/openchat-7b:free": {
    id: "openchat/openchat-7b:free",
    name: "OpenChat 3.5 (free)",
    maxLength: 8192,
  },
  "mistralai/mistral-tiny": {
    id: "mistralai/mistral-tiny",
    name: "Mistral: Tiny",
    maxLength: 32000,
  },
  "mistralai/mistral-small": {
    id: "mistralai/mistral-small",
    name: "Mistral: Small",
    maxLength: 32000,
  },
  "mistralai/mistral-medium": {
    id: "mistralai/mistral-medium",
    name: "Mistral: Medium",
    maxLength: 32000,
  },
};

module.exports.MODELS = MODELS;
