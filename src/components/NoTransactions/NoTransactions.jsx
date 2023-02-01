import styles from './NoTransactions.module.css'

export const NoTransactions = () => {
    return (
        <div className={styles.textNoTransactionsWrapper}>
          <p className={styles.textNoTransactions}>
            Oops, there is no transactions, yet.
          </p>
          <p className={styles.textNoTransactions}>
            To add new transaction click on the "Plus"!
          </p>
        </div>
    )
}