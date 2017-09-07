package com.nekogata.scalajs_drum_sequencer.infrastructure

import com.nekogata.scalajs_drum_sequencer.domain.sequener._
import com.nekogata.scalajs_drum_sequencer.domain.sound.{Sound, SoundRepository}
import com.nekogata.scalajs_drum_sequencer.js_exports.PlayerEvents

class SoundRepositoryImpl extends SoundRepository{
  override def get(tn: TrackName): Sound = SoundRepositoryImpl.state(tn)
  override def store(tn: TrackName, s: Sound): Unit = {
    SoundRepositoryImpl.state = SoundRepositoryImpl.state.updated(tn, s)
    PlayerEvents.PlayerStateChanged.fire()
  }
}

object SoundRepositoryImpl {
  var state: Map[TrackName, Sound] = Map(
    HH -> new NotYetLoadedSoundImpl(),
    RS -> new NotYetLoadedSoundImpl(),
    SD -> new NotYetLoadedSoundImpl(),
    BD -> new NotYetLoadedSoundImpl()
  )
}

