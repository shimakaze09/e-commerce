﻿using System.Text.Json;
using Core.Entities;

namespace Infrastructure.Data;

public class StoreContextSeed
{
    public static async Task SeedAsync(StoreContext context)
    {
        if (!context.ProductBrands.Any())
        {
            var brandData =
                await File.ReadAllTextAsync(
                    "../Infrastructure/Data/SeedData/brands.json");
            var brands =
                JsonSerializer.Deserialize<List<ProductBrand>>(brandData);
            context.ProductBrands.AddRange(brands);
        }

        if (!context.ProductTypes.Any())
        {
            var typeData =
                await File.ReadAllTextAsync(
                    "../Infrastructure/Data/SeedData/types.json");
            var types = JsonSerializer.Deserialize<List<ProductType>>(typeData);
            context.ProductTypes.AddRange(types);
        }

        if (!context.Products.Any())
        {
            var productsData =
                await File.ReadAllTextAsync(
                    "../Infrastructure/Data/SeedData/products.json");
            var products =
                JsonSerializer.Deserialize<List<Product>>(productsData);
            context.Products.AddRange(products);
        }

        if (context.ChangeTracker.HasChanges())
            await context.SaveChangesAsync();
    }
}