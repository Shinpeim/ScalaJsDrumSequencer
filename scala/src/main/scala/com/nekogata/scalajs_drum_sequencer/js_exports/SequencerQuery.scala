package com.nekogata.scalajs_drum_sequencer.js_exports

import com.nekogata.scalajs_drum_sequencer.domain.player.PlayerStateRepository
import com.nekogata.scalajs_drum_sequencer.domain.sequener.{SequencerStateRepository, TrackRepository}
import com.nekogata.scalajs_drum_sequencer.infrastructure.{PlayerStateRepositoryImpl, SequencerStateRepositoryImpl, TrackRepositoryImpl}
import com.nekogata.scalajs_drum_sequencer.query.SequencerQuery

import scala.scalajs.js
import scala.scalajs.js.annotation.{JSExport, JSExportTopLevel}


@JSExportTopLevel("SequencerQuery")
class SequencerQueryImpl extends SequencerQuery {
  override val trackRepository: TrackRepository = new TrackRepositoryImpl
  override val sequencerStateRepository: SequencerStateRepository = new SequencerStateRepositoryImpl
  override val playerStateRepository: PlayerStateRepository = new PlayerStateRepositoryImpl

  @JSExport
  override def notes(): js.Array[Boolean] = super.notes

  @JSExport
  override def selectedTrackName(): String = super.selectedTrackName
}
