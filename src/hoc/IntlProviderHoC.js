import React from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import messages from '../utils/Languages';

class IntlProviderHoC extends React.Component {
	render() {
		const { children, language } = this.props;

		return (
			<IntlProvider locale={language} messages={messages[language]} defaultLocale="vi">
				{children}
			</IntlProvider>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		language: state.app.language,
	};
};

export default connect(mapStateToProps, null)(IntlProviderHoC);
