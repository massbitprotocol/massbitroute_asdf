// Code generated by "stringer -type=quoteState"; DO NOT EDIT.

package syntax

import "strconv"

const _quoteState_name = "noStatesubCmdsubCmdBckquodblQuoteshdocWordhdocBodyhdocBodyTabsarithmExprarithmExprLetarithmExprCmdarithmExprBracktestRegexpswitchCaseparamExpNameparamExpSliceparamExpReplparamExpExparrayElems"

var _quoteState_map = map[quoteState]string{
	1:      _quoteState_name[0:7],
	2:      _quoteState_name[7:13],
	4:      _quoteState_name[13:25],
	8:      _quoteState_name[25:34],
	16:     _quoteState_name[34:42],
	32:     _quoteState_name[42:50],
	64:     _quoteState_name[50:62],
	128:    _quoteState_name[62:72],
	256:    _quoteState_name[72:85],
	512:    _quoteState_name[85:98],
	1024:   _quoteState_name[98:113],
	2048:   _quoteState_name[113:123],
	4096:   _quoteState_name[123:133],
	8192:   _quoteState_name[133:145],
	16384:  _quoteState_name[145:158],
	32768:  _quoteState_name[158:170],
	65536:  _quoteState_name[170:181],
	131072: _quoteState_name[181:191],
}

func (i quoteState) String() string {
	if str, ok := _quoteState_map[i]; ok {
		return str
	}
	return "quoteState(" + strconv.FormatInt(int64(i), 10) + ")"
}
