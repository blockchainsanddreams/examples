import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'about' : ActorMethod<[], string>,
  'home' : ActorMethod<[], string>,
  'page' : ActorMethod<[], string>,
}
