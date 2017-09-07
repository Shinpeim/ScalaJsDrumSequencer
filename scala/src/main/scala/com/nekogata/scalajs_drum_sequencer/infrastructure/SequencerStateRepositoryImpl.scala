package com.nekogata.scalajs_drum_sequencer.infrastructure

import com.nekogata.scalajs_drum_sequencer.domain.sequener.{HH, PatternA, SequencerState, SequencerStateRepository}

class SequencerStateRepositoryImpl extends SequencerStateRepository{
  def get: SequencerState = SequencerStateRepositoryImpl.state

  def store(s: SequencerState): Unit = {
    SequencerStateRepositoryImpl.state = s
  }
}

object SequencerStateRepositoryImpl {
  var state: SequencerState = new SequencerState(PatternA, HH)
}
