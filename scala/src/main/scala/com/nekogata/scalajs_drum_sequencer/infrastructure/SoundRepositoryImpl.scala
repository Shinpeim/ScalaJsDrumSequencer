package com.nekogata.scalajs_drum_sequencer.infrastructure

import com.nekogata.scalajs_drum_sequencer.domain.sequener._
import com.nekogata.scalajs_drum_sequencer.domain.sound.{Sound, SoundRepository}

class SoundRepositoryImpl extends SoundRepository{
  override def get(tn: TrackName): Sound = new SoundImpl
  override def store(tn: TrackName, s: Sound): Unit = ()
}

// todo ちゃんとやる
class SoundImpl extends Sound {
  override def play(): Unit = println("playing sound")
}
