package com.nekogata.scalajs_drum_sequencer.domain.sequener

trait SequencerStateRepository {
  def get: SequencerState
  def store(s: SequencerState): Unit
}
