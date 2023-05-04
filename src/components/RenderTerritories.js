import styles from './RenderTerritories.module.css';

import arrangeTerritories from "../utils/arrangeTerritories";

function RenderTerritories(props) {
  const territoriesTree = arrangeTerritories(props.allTerritories);

  const Element = (data) => {
    if (data.territory.children) {
      return (
        <details>
          <summary>{data.territory.name}</summary>
          <ul className={styles.child}>
            {data.territory.children.map(child => (
              <li key={child.id}>
                <Element territory={child} />
              </li>
            ))}
          </ul>
        </details>
      );
    } else {
      return <span>{data.territory.name}</span>;
    }
  }

  return (
    <div className={styles.container}>
      <h2>Territories</h2>
      <p>Here are the list of territories</p>
      <ul>
        {territoriesTree.map(territory => (
          <li key={territory.id}>
            <Element territory={territory} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RenderTerritories;
