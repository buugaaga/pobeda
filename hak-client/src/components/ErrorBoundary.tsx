import { PureComponent, ReactNode, ErrorInfo } from 'react';

type Props = {
  errorComponent: ReactNode;
};

type State = {
  hasError: boolean;
  error: Error | null;
  info: ErrorInfo | null;
};

export class ErrorBoundary extends PureComponent<Props, State> {
  static defaultProps = {
    errorComponent: null,
  };

  state: State = {
    hasError: false,
    error: null,
    info: null,
  };

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(this.state.error, this.state.info)
    this.setState({ hasError: true, error, info });
  }

  
  render() {
    const { errorComponent } = this.props;

    // if (this.state.hasError) {
    //   if (errorComponent) {
    //     return errorComponent;
    //   }
    //   return <div>{`${this.state.error}\n${this.state.info}`}</div>;
    // }
    return this.props.children;
  }
}

// export default withTranslation()(withStyles(styles)(ErrorBoundary));
