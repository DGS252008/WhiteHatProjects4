class Atm(object):
    bankBalance = 1,000,000
    def __init__(self, card_number, pin_number):
        self.card_number = card_number
        self.pin_number = pin_number

    def CashWithdrawal():
        print('Withdrawing cash...' + bankBalance + '-100')
        bankBalance -= 100

    def BalanceInquiry():
        print('Your bank balance is ' + bankBalance)


