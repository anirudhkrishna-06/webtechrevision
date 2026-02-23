products = { 
    1 => {name: "Soda", price: 30},
    2 => {name: "SodaPal", price: 40},
    3 => {name: "SodaMal", price: 50},
    }

def display_products(products)
    products.each do | key, product |
        puts "#{key}. #{product[:name]}"
    end
    puts '0. End Machine'
end

def select_products(products)
    loop do
        print '\nEnter Product number below:\n'
        choice = gets.chomp.to_i

        if choice == 0
            return nil
        elsif products.key?(choice)
            return choice
        else
            puts 'Invalid Selection'
        end
    end
end
    

def get_quantity(products_name, price)
    loop do 
        print '\n How many you want to buy: '
        quant = gets.chomp.to_f
        if quant > 0
            return quant
        end
    end
end

def make_payment(total, product_name)
    total_inserted = 0
    remaining = total
    loop do
        print "insert money (remaining: #{remaining}): "
        money = gets.chomp.to_f
        if money>0
            total_inserted += money
            remaining -= money
            if remaining<0
                change = -remaining
                puts "change returned: #{change}"
            end
        end
    end
end

puts 'Welcome'
cont = true
while cont
    display_products(products)
    selected = select_products(products)
    selected_product = products[selected]
    quant = get_quantity(selected_product[:name],selected_product[:price])
    total = quant * selected_product[:price]
    make_payment(total, selected_product[:name])
    break
end

