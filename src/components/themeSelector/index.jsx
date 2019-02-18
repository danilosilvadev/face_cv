import React from 'react';
import randomstring from '../../utils/helpers/randomString';
import { CustomButton } from '../../utils/styledHelpers';
import './style.scss'

export default function ({
  state: {
    themeContext,
    themeContext: { primary, secondary, tertiary },
  },
  actions: { changeThemeContext },
}) {
  return (
    <div className="f f-align-center m-2 theme-selector">
      <CustomButton
        onClick={() => changeThemeContext(primary.backgroundColor)}
        theme={themeContext}
        color={primary.backgroundColor}
        key={randomstring()}
      />
      <CustomButton
        onClick={() => changeThemeContext(secondary.backgroundColor)}
        theme={themeContext}
        color={secondary.backgroundColor}
        key={randomstring()}
      />
      <CustomButton
        onClick={() => changeThemeContext(tertiary.backgroundColor)}
        theme={themeContext}
        color={tertiary.backgroundColor}
        key={randomstring()}
      />
    </div>
  );
}