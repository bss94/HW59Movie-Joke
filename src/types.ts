export interface Movie {
  name: string;
  id: string;
}

export interface jokeState {
  id: string,
  joke: string
}
export interface singleJoke {
  category: string
  flags: {
    nsfw: boolean,
    religious: boolean,
    political: boolean,
    racist: boolean,
    explicit: boolean
    sexist: boolean
  },
  id: number
  joke: string
  lang: string
  safe: boolean
  type: string
}

export interface JokesJson {
  amount: number;
  error: boolean;
  jokes: singleJoke[];
}

