import React from 'react';
import './App.css';

const goodsFromServer: string[] = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

type State = {
  goods: string[],
  isVisible: boolean,
  isReversed: boolean,
  sortedBy: string,
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    isVisible: false,
    isReversed: false,
    sortedBy: '',
  };

  start = () => {
    this.setState({
      isVisible: true,
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortedByAlphabet = () => {
    this.setState({
      sortedBy: 'alphabet',
    });
  };

  sortedByLength = () => {
    this.setState({
      sortedBy: 'length',
    });
  };

  reset = () => {
    this.setState(
      {
        isReversed: false,
        sortedBy: '',
      },
    );
  };

  prepareGoods = () => {
    const { goods, isReversed, sortedBy } = this.state;
    const copyGoods = [...goods];

    copyGoods.sort((good1, good2) => {
      switch (sortedBy) {
        case 'alphabet':
          return good1.localeCompare(good2);
        case 'length':
          return good1.length - good2.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      copyGoods.reverse();
    }

    return copyGoods;
  };

  render() {
    const { isVisible } = this.state;
    const preparedGoods = this.prepareGoods();

    return (
      <div className="App">
        {!isVisible && (
          <button
            type="button"
            className="start-button"
            onClick={this.start}
          >
            Start
          </button>
        )}

        {isVisible && (
          <>
            <ul className="list">
              {preparedGoods.map(good => (
                <li
                  key={good}
                  className="list__item"
                >
                  {good}
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="reverse-button"
              onClick={this.reverse}
            >
              Reverse
            </button>

            <button
              type="button"
              className="sortedByAlphabet-button"
              onClick={this.sortedByAlphabet}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              className="ortedByLength-button"
              onClick={this.sortedByLength}
            >
              Sort by length
            </button>

            <button
              type="button"
              className="reset-button"
              onClick={this.reset}
            >
              Reset
            </button>
          </>
        )}
      </div>
    );
  }
}

export default App;
