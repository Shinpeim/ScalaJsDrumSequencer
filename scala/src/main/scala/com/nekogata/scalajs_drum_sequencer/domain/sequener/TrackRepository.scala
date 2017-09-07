package com.nekogata.scalajs_drum_sequencer.domain.sequener

trait TrackRepository {
  def get(p: PatternId, tn: TrackName): Track
  def store(p: PatternId, tn: TrackName, t: Track): Unit
}
