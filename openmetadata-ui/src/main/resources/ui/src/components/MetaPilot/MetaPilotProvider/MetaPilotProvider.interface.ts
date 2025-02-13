/*
 *  Copyright 2024 Collate.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import { ReactNode } from 'react';
import { Suggestion } from '../../../generated/entity/feed/suggestion';

export interface MetaPilotContextType {
  suggestionsVisible: boolean;
  isMetaPilotEnabled: boolean;
  onToggleSuggestionsVisible: (state: boolean) => void;
  activeSuggestion?: Suggestion;
  suggestions: Suggestion[];
  loading: boolean;
  entityFqn: string;
  onUpdateActiveSuggestion: (suggestion?: Suggestion) => void;
  fetchSuggestions: (entityFqn: string) => void;
  acceptRejectSuggestion: (
    suggestion: Suggestion,
    action: SuggestionAction
  ) => void;
  onUpdateEntityFqn: (entityFqn: string) => void;
  resetMetaPilot: () => void;
  initMetaPilot: (
    entityFqn: string,
    refreshEntity?: (suggestion: Suggestion) => void
  ) => void;
}

export interface MetaPilotContextProps {
  children: ReactNode;
}

export enum SuggestionAction {
  Accept = 'accept',
  Reject = 'reject',
}
