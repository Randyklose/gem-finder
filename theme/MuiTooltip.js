import { createMuiTheme } from '@material-ui/core/styles';

const { typography, spacing } = createMuiTheme();

export const MuiTooltipOverrides = {
  tooltip: {
    fontSize: typography.caption.fontSize,
    padding: spacing(1),
  },
};
