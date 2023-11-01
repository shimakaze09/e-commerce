﻿using Core.Entities;
using Core.Entities.OrderAggregate;
using Core.Interfaces;

namespace Infrastructure.Services;

public class OrderService : IOrderService
{
    private readonly IGenericRepository<Order> _orderRepo;
    private readonly IGenericRepository<DeliveryMethod> _deliveryRepo;
    private readonly IGenericRepository<Product> _productRepo;
    private readonly IBasketRepository _basketRepo;

    public OrderService(IGenericRepository<Order> orderRepo,
        IGenericRepository<DeliveryMethod> deliveryRepo,
        IGenericRepository<Product> productRepo, IBasketRepository basketRepo)
    {
        _orderRepo = orderRepo;
        _deliveryRepo = deliveryRepo;
        _productRepo = productRepo;
        _basketRepo = basketRepo;
    }

    public async Task<Order> CreateOrderAsync(string buyerEmail,
        int deliveryMethodId,
        string basketId,
        Address shippingAddress)
    {
        // Get basket from basket repo
        var basket = await _basketRepo.GetBasketAsync(basketId);

        // Get items form the product repo
        var items = new List<OrderItem>();
        foreach (var item in basket.Items)
        {
            var productItem = await _productRepo.GetByIdAsync(item.Id);
            var itemOrdered = new ProductItemOrdered(productItem.Id, productItem
                .Name, productItem.PictureUrl);
            var orderItem = new OrderItem(itemOrdered, productItem.Price,
                item.Quantity);
            items.Add(orderItem);
        }

        // Get delivery method from repo
        var deliveryMethod = await _deliveryRepo.GetByIdAsync(deliveryMethodId);

        // Calculate subtotal
        var subtotal = items.Sum(item => item.Price * item.Quantity);

        // Create order
        var order = new Order(items, buyerEmail, shippingAddress,
            deliveryMethod, subtotal);

        // TODO: Save to db
        // Return order
        return order;
    }

    public Task<IReadOnlyList<Order>> GetOrdersForUserAsync(string buyerEmail)
    {
        throw new NotImplementedException();
    }

    public Task<Order> GetOrderByIdAsync(int id, string buyerEmail)
    {
        throw new NotImplementedException();
    }

    public Task<IReadOnlyList<DeliveryMethod>> GetDeliveryMethodsAsync()
    {
        throw new NotImplementedException();
    }
}