export type HelpingVerb<Data> = Data extends unknown[] ? 'are' : 'is'
