package com.nekogata.scalajs_drum_sequencer.domain.sound

import com.nekogata.scalajs_drum_sequencer.domain.sequener.TrackName

trait SoundRepository {
  def get(tn: TrackName): Sound
  def store(tn: TrackName, s: Sound): Unit
}
